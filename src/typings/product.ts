interface Image {
	id: string;
	altText: string;
	src: string;
	width: number;
	height: number;
}

interface Option {
	id: string;
	name: string;
	values: string[];
}

interface Money {
	amount: number;
	currencyCode: string;
}

interface VariantOption {
	name: string;
	value: string;
}

export interface Product {
	descriptionHtml: string;
	handle: string;
	images: {
		nodes: Image[];
	};
	options: Option[];
	priceRange: {
		minVariantPrice: Money;
		maxVariantPrice: Money;
	};
	title: string;
	variants: {
		nodes: {
			id: string;
			title: string;
			priceV2: Money;
			image: Image;
			selectedOptions: VariantOption[];
		}[];
	};
}
