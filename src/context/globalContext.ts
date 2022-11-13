import React from 'react';
import { Product } from '../typings/product';

export interface GlobalContextInterface {
	product?: Product;
	currentVariantIndex: number | undefined;
	setVariantIndex: (newIndex: number) => void;
}

export const GlobalContext = React.createContext<GlobalContextInterface>({
	product: undefined,
	currentVariantIndex: undefined,
	setVariantIndex: () => {},
});
