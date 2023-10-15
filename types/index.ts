import { MouseEventHandler } from 'react';

export interface ICustomButtonProps {
	title: string;
	containerStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	type?: 'button' | 'submit';
	textStyles?: string;
	rightIcon?: string;
	isDisabled?: boolean;
}

export interface ISearchManufacturerProps {
	manufacturer: string;
	setManufacturer(m: string): void;
}

export interface ICarProps {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
}
