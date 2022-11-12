import Head from 'next/head';
import { useGetProduct } from '../graphql/getProduct';

export default function Home() {
	const { loading, data } = useGetProduct();

	console.log(loading, data);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				render a product here.
			</main>

			<footer className="flex items-center justify-center w-full h-24 border-t">
				footer
			</footer>
		</div>
	);
}
