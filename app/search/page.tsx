import { BreedCard } from '@/components/BreedCard';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { endpoints } from '@/lib/constants';
import { fetchData } from '@/lib/fetchData';
import React from 'react'

const page = async (params: any) => {
	const searchTerm = params.searchParams.q;

	const api_endpoints = {
		dogs: `${endpoints.dogs}/search?q=${searchTerm}&attach_image=1`,
		cats: `${endpoints.cats}/search?q=${searchTerm}&attach_image=1`
	}

	const dogBreedsPromise = fetchData(api_endpoints.dogs);
	const catBreedsPromise = fetchData(api_endpoints.cats);

	const [dogsData, catsData] = await Promise.all([dogBreedsPromise, catBreedsPromise]);

	// Combine initial breeds
	const breeds = [...dogsData, ...catsData].map((breed) => ({
		id: breed.id,
		name: breed.name,
		image: breed.image || {
			url: `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`
		},
		description: breed?.description || `${breed?.temperament} | ${breed?.bred_for}`
	}));

	return (
		<main>
			<HeroSection
				defaultSearchTerm={searchTerm}
				backgroundImage="/dog-cat.png"
				heading="Explore the World of Pets"
				subheading="Discover the most amazing breeds of cats and dogs"
			/>
			<section id='breeds' className="container mx-auto p-6">
				<h2 className="text-3xl font-bold mb-6">Results</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{breeds.map((breed) => (
						<BreedCard key={breed.id} id={breed.id} name={breed.name} description={breed.description} image={breed.image} />
					))}
				</div>
			</section>

			<Footer />
		</main>
	);
};

export default page