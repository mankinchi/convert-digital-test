import clsx from 'clsx';
import { ChevronDown, ChevronUp } from 'react-feather';

interface Props {
	value: number;
	disabled: boolean;
	onChange: (value: number) => void;
}

export const NumberInput = (props: Props) => {
	const { value, disabled, onChange } = props;

	const handleValueChange = (goUp: boolean) => () => {
		if (disabled) {
			return;
		}

		if (goUp) {
			onChange(value + 1);
			return;
		}

		if (value > 1) {
			onChange(value - 1);
		}
	};

	return (
		<div
			className={clsx(
				'flex items-center gap-2 rounded-sm border border-slate-200 bg-white pl-2',
				disabled && 'text-slate-300',
			)}
		>
			<div>{value}</div>
			<div className="flex h-full flex-col">
				<div
					className={clsx(
						'flex grow cursor-pointer items-center justify-center transition-colors',
						disabled && 'cursor-not-allowed',
						!disabled && 'hover:bg-slate-100',
					)}
					onClick={handleValueChange(true)}
				>
					<ChevronUp size={16} />
				</div>
				<div
					className={clsx(
						'flex grow cursor-pointer items-center justify-center transition-colors',
						disabled && 'cursor-not-allowed',
						!disabled && 'hover:bg-slate-100',
					)}
					onClick={handleValueChange(false)}
				>
					<ChevronDown size={16} />
				</div>
			</div>
		</div>
	);
};
