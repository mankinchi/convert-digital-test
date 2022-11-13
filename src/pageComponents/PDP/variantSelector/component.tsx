import clsx from 'clsx';
import Image from 'next/image';
import { useContext } from 'react';
import { GlobalContext } from '../../../context/globalContext';
import { createImgPlaceholder } from '../../../helper/createImgPlaceholder';

export const VariantSelector = () => {
	// eslint-disable-next-line operator-linebreak
	const { product, currentVariantIndex, setVariantIndex } =
		useContext(GlobalContext);

	const handleVariantClick = (newIndex: number) => () => {
		setVariantIndex(newIndex);
	};

	return (
		<div className="isolate z-10 flex h-full select-none flex-col justify-center gap-2 overflow-y-clip py-8">
			{product && (
				<>
					{product.variants.nodes.map((variant, i) => {
						const sizeOption = variant.selectedOptions.find(
							(option) => option.name === 'Size',
						);

						return (
							<div
								key={variant.id}
								className="relative min-h-[100px] w-full cursor-pointer overflow-hidden transition-shadow hover:drop-shadow-md"
								onClick={handleVariantClick(i)}
							>
								<Image
									src={variant.image.src}
									alt={variant.image.altText ?? ''}
									width={variant.image.width}
									height={variant.image.height}
									placeholder="blur"
									blurDataURL={`data:image/svg+xml;base64,${createImgPlaceholder(
										700,
										700,
									)}`}
									className={clsx(
										'origin-center transition-transform',
										currentVariantIndex === i
											? 'border border-slate-400'
											: 'hover:scale-110',
									)}
								/>
								{sizeOption && (
									<div className="absolute bottom-0 right-0 bg-black px-2 py-1 text-sm text-white">
										{sizeOption.value}
									</div>
								)}
							</div>
						);
					})}
				</>
			)}
		</div>
	);
};
