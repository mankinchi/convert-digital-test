import { gql, useQuery } from '@apollo/client';

const query = gql`
	query {
		product(
			handle: "world-of-warcraft-lich-king-arthas-26-premium-statue"
		) {
			availableForSale
			description
			descriptionHtml
			handle
			images(first: 20) {
				nodes {
					altText
					url
				}
			}
			featuredImage {
				altText
				url
			}
			collections(first: 10) {
				nodes {
					description
					descriptionHtml
				}
			}
			options {
				id
				name
				values
			}
			priceRange {
				maxVariantPrice {
					amount
					currencyCode
				}
				minVariantPrice {
					amount
					currencyCode
				}
			}
			title
			variants(first: 50) {
				nodes {
					id
					priceV2 {
						amount
						currencyCode
					}
					image {
						src
						altText
					}
				}
			}
		}
	}
`;

// const query = gql`
// 	{
// 		products(first: 10) {
// 			nodes {
// 				id
// 				handle
// 			}
// 		}
// 	}
// `;

export const useGetProduct = () => {
	const { loading, data } = useQuery(query);

	return { loading, data };
};
