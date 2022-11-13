import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';
import { NumberInput } from '../../../components/numberInput';
import { CartContext } from '../../../context/cartContext';
import { GlobalContext } from '../../../context/globalContext';

export const ProductDescription = () => {
	const { product, currentVariantIndex } = useContext(GlobalContext);
	const { addItemToCart } = useContext(CartContext);
	const [quantity, setQuantity] = useState(1);

	const selectedVariant =
		currentVariantIndex !== undefined
			? product.variants.nodes[currentVariantIndex]
			: undefined;

	const handleAddToCart = () => {
		if (currentVariantIndex === undefined) return;

		addItemToCart(currentVariantIndex.toString(), quantity);
	};

	useEffect(() => {
		setQuantity(1);
	}, [currentVariantIndex]);

	return (
		<div className="flex h-full items-center justify-center bg-gray-200">
			{product && (
				<div className="flex flex-col gap-4">
					<div className="text-3xl font-bold text-slate-800">
						{product.title}
					</div>
					{selectedVariant && (
						<div className="text-lg font-semibold italic">
							{selectedVariant.title}
						</div>
					)}
					<div className="text-slate-600">
						{!selectedVariant ? (
							<>
								<span className="text-xs">
									{
										product.priceRange.minVariantPrice
											.currencyCode
									}
								</span>
								<span className="text-xl font-semibold">{`$${product.priceRange.minVariantPrice.amount}`}</span>
								<span> - </span>
								<span className="text-xs">
									{
										product.priceRange.maxVariantPrice
											.currencyCode
									}
								</span>
								<span className="text-xl font-semibold">{`$${product.priceRange.maxVariantPrice.amount}`}</span>
							</>
						) : (
							<>
								<span className="text-xs">
									{selectedVariant.priceV2.currencyCode}
								</span>
								<span className="text-xl font-semibold">{`$${selectedVariant.priceV2.amount}`}</span>
							</>
						)}
					</div>
					<div>
						<div
							dangerouslySetInnerHTML={{
								__html: product.descriptionHtml,
							}}
						/>
					</div>
					<div className="flex h-12 select-none gap-2">
						<div
							className={clsx(
								'flex h-full cursor-pointer items-center bg-gray-500 px-4 font-bold text-white hover:drop-shadow-lg',
								!selectedVariant &&
									'cursor-not-allowed !bg-gray-300',
							)}
							onClick={handleAddToCart}
						>
							ADD TO CART
						</div>
						<NumberInput
							value={quantity}
							disabled={!selectedVariant}
							onChange={setQuantity}
						/>
					</div>
				</div>
			)}
		</div>
	);
};
