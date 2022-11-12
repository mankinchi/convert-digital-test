/* eslint-disable */
import 'tailwindcss/tailwind.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: `${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2022-10/graphql.json`,
	cache: new InMemoryCache(),
	headers: {
		'X-Shopify-Storefront-Access-Token':
			process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />;
		</ApolloProvider>
	);
}

export default MyApp;
