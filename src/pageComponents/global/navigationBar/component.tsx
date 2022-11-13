import Image from 'next/image';
import { useContext } from 'react';
import { ShoppingBag } from 'react-feather';
import { CartContext } from '../../../context/cartContext';
import avatar from '../../../public/images/avatar.png';

export const NavigationBar = () => {
	const { cart } = useContext(CartContext);

	const totalItem = Object.values(cart).reduce(
		(prev, quantity) => prev + quantity,
		0,
	);

	return (
		<div className="flex w-36 select-none items-center justify-between gap-2 rounded-b-lg bg-white p-4">
			<a href="/">
				<Image
					src={avatar}
					alt="personal photo"
					className="aspect-square w-6"
				/>
			</a>
			<div className="relative">
				<ShoppingBag className="cursor-pointer text-slate-600" />
				{totalItem !== 0 && (
					<div className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-xl bg-red-500 text-[10px] text-white">
						{totalItem}
					</div>
				)}
			</div>
		</div>
	);
};
