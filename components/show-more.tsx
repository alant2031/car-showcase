'use client';
import { IShowMoreProps } from '@/types';
import { CustomButton } from '.';

function ShowMore({ pageNumber, isNext, setLimit }: IShowMoreProps) {
	const handleNavigation = () => {
		const newLimit = (pageNumber + 1) * 10;
		setLimit(newLimit);
	};

	return (
		<div className="w-full flex-center gap-5 mt-10">
			{!isNext && (
				<CustomButton
					title="Show More"
					type="button"
					containerStyles="bg-primary-blue rounded-full text-white"
					handleClick={handleNavigation}
				/>
			)}
		</div>
	);
}

export default ShowMore;
