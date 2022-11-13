import React from 'react';

export interface CartContextInterface {
	cart: {
		[id: string]: number;
	};
	addItemToCart: (id: string, quantity: number) => void;
}

export const CartContext = React.createContext<CartContextInterface>({
	cart: {},
	addItemToCart: () => {},
});
