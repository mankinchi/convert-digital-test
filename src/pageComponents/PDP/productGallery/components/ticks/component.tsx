import { clsx } from 'clsx';

interface TickProps {
	isActive: boolean;
	onClick: () => void;
}

const Tick = (props: TickProps) => {
	const { isActive, onClick } = props;

	return (
		<div
			className={clsx(
				'h-4 w-4 rounded-xl border border-solid bg-white hover:border-black',
				isActive && ' h-5 w-5 !border-white bg-transparent',
				!isActive && 'cursor-pointer',
			)}
			onClick={onClick}
		/>
	);
};

interface Props {
	currentIndex: number;
	total: number;
	onClick: (newIndex: number) => void;
}

export const GalleryTicks = (props: Props) => {
	const { currentIndex, total, onClick } = props;

	const handleClick = (index: number) => () => {
		onClick(index);
	};

	return (
		<div className="flex items-center gap-2">
			{Array(total)
				.fill(0)
				.map((_, i) => (
					<Tick
						// eslint-disable-next-line react/no-array-index-key
						key={i}
						isActive={currentIndex === i}
						onClick={handleClick(i)}
					/>
				))}
		</div>
	);
};
