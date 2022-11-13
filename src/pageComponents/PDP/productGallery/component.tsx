import { clsx } from 'clsx';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { GlobalContext } from '../../../context/globalContext';
import { createImgPlaceholder } from '../../../helper/createImgPlaceholder';
import { GalleryTicks } from './components/ticks';

export const ProductGallery = () => {
	const { product } = useContext(GlobalContext);
	const [currentIndex, setCurrentIndex] = useState<number | undefined>(
		undefined,
	);

	const photos = (product?.images.nodes ?? []).concat(
		product?.variants.nodes.map((variant) => variant.image) ?? [],
	);

	const canMoveForward = currentIndex < photos.length - 1;
	const handleForwardBtnClick = () => {
		setCurrentIndex((index) => {
			if (canMoveForward) {
				return index + 1;
			}

			return index;
		});
	};

	const canMoveBackward = currentIndex > 0;
	const handleBackBtnClick = () => {
		setCurrentIndex((index) => {
			if (canMoveBackward) {
				return index - 1;
			}

			return index;
		});
	};

	const handleJumpIndex = (newIndex: number) => {
		if (photos[newIndex]) {
			setCurrentIndex(newIndex);
		}
	};

	useEffect(() => {
		if (!product) return;

		setCurrentIndex(0);
	}, [product]);

	return (
		<div className="relative flex items-center justify-between bg-gray-400">
			<div
				className={clsx(
					'cursor-pointer rounded-tr-xl rounded-br-xl border-slate-400 bg-white px-3 py-6',
					!canMoveBackward && 'cursor-not-allowed',
				)}
				onClick={canMoveBackward ? handleBackBtnClick : undefined}
			>
				<ArrowLeft
					className={clsx(
						'text-slate-400',
						!canMoveBackward && 'text-slate-200',
					)}
					size={16}
				/>
			</div>
			{photos[currentIndex] && (
				<div className="max-w-[80%] select-none sm:max-w-[60%] lg:max-w-[40%]">
					<Image
						key={photos[currentIndex].src}
						src={photos[currentIndex].src}
						alt={photos[currentIndex].altText ?? ''}
						width={photos[currentIndex].width}
						height={photos[currentIndex].height}
						placeholder="blur"
						blurDataURL={`data:image/svg+xml;base64,${createImgPlaceholder(
							700,
							700,
						)}`}
					/>
				</div>
			)}
			<div
				className={clsx(
					'cursor-pointer rounded-tl-xl rounded-bl-xl border-slate-400 bg-white px-3 py-6',
					!canMoveForward && 'cursor-not-allowed',
				)}
				onClick={canMoveForward ? handleForwardBtnClick : undefined}
			>
				<ArrowRight
					className={clsx(
						'text-slate-400',
						!canMoveForward && 'text-slate-200',
					)}
					size={16}
				/>
			</div>
			<div className="absolute bottom-8 left-0 right-0 flex justify-center">
				{product && (
					<GalleryTicks
						currentIndex={currentIndex}
						total={photos.length}
						onClick={handleJumpIndex}
					/>
				)}
			</div>
		</div>
	);
};
