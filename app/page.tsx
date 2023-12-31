import { CarCard, CustomFilter, Hero, Searchbar, ShowMore } from '@/components';
import { fetchCars } from '@/utils';
import { fuels, yearsOfProduction } from '@/constants';
import { IHomeProps } from '@/types';

export default async function Home({ searchParams }: IHomeProps) {
	const allCars = await fetchCars({
		manufacturer: searchParams.manufacturer || '',
		model: searchParams.model || '',
		year: searchParams.year || 2022,
		fuel: searchParams.fuel || '',
		limit: searchParams.limit || 10,
	}).catch((_) => []);
	const isDataEmpty = !Array.isArray(allCars) || !allCars.length || !allCars;
	return (
		<main className="overflow-hidden">
			<Hero />
			<div className="mt-12 padding-x padding-y max-width" id="discover">
				<div className="home__text-container">
					<h1 className="text-4xl font-extrabold">Catálogo de Carros</h1>
					<p>Descubra os carros que podem ser do seu interesse</p>
				</div>
				<div className="home__filters">
					<Searchbar />
					<div className="home__filter-container">
						<CustomFilter title="fuel" options={fuels} />
						<CustomFilter title="year" options={yearsOfProduction} />
					</div>
				</div>
				{!isDataEmpty ? (
					<section>
						<div className="home__cars-wrapper">
							{allCars.map((car, i) => (
								<CarCard key={i} car={car} />
							))}
						</div>
						<ShowMore
							pageNumber={(searchParams.limit || 10) / 10}
							isNext={(searchParams.limit || 10) > allCars.length}
						/>
					</section>
				) : (
					<div className="home__error-container">
						<h2 className="text-black text-xl font-bold">
							Ops, sem resultados
						</h2>
						<p>{allCars?.message}</p>
					</div>
				)}
			</div>
		</main>
	);
}
