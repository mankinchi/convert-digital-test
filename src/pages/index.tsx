import Head from 'next/head';
import React from 'react';
import { CartContext, CartContextInterface } from '../context/cartContext';
import {
	GlobalContext,
	GlobalContextInterface,
} from '../context/globalContext';
import { getProductQuery } from '../graphql/getProduct';
import { client } from '../helper/apolloClient';
import { NavigationBar } from '../pageComponents/global/navigationBar';
import { ProductDescription } from '../pageComponents/PDP/productDescription';
import { ProductGallery } from '../pageComponents/PDP/productGallery';
import { VariantSelector } from '../pageComponents/PDP/variantSelector';
import { Product } from '../typings/product';

export async function getServerSideProps() {
	const { data } = await client.query<{ product: Product }>({
		query: getProductQuery,
	});

	return { props: { data: data.product } };
}

interface Props {
	data: Product;
}

export default function Home(props: Props) {
	const { data } = props;

	const [variantIndex, setVariantIndex] = React.useState<number | undefined>(
		undefined,
	);
	const [cart, setCart] = React.useState<{ [id: string]: number }>({});

	const addItemToCart = React.useCallback(
		(id: string, quantity: number) => {
			if (cart[id]) {
				setCart((currentCart) => ({
					...currentCart,
					[id]: currentCart[id] + quantity,
				}));
				return;
			}

			setCart((currentCart) => ({
				...currentCart,
				[id]: quantity,
			}));
		},
		[cart],
	);

	const globalContextValue: GlobalContextInterface = React.useMemo(
		() => ({
			product: data,
			currentVariantIndex: variantIndex,
			setVariantIndex,
		}),
		[data, variantIndex, setVariantIndex],
	);

	const cartContextValue: CartContextInterface = React.useMemo(
		() => ({
			cart,
			addItemToCart,
		}),
		[cart, addItemToCart],
	);

	return (
		<>
			<Head>
				<title>Convert Digital FE Test</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<CartContext.Provider value={cartContextValue}>
				<GlobalContext.Provider value={globalContextValue}>
					<div className="flex h-screen w-screen">
						<section className="h-full shrink-0 basis-[120px] bg-white p-2">
							<VariantSelector />
						</section>
						<main className="relative grid flex-grow grid-cols-2">
							<ProductDescription />
							<ProductGallery />
							<nav className="absolute top-0 left-1/2 -translate-x-1/2">
								<NavigationBar />
							</nav>
						</main>
					</div>
				</GlobalContext.Provider>
			</CartContext.Provider>
		</>
	);
}
