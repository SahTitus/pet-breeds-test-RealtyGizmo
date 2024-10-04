"use client"

import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchData } from '@/lib/fetchData';
import { endpoints } from '@/lib/constants';
import { BreedCard } from './BreedCard';
import { Loader } from './loading/Loader';
import { isDogId } from '@/util';
import { BreedCardProps } from '@/lib/interface';

interface InfiniteBreedListProps {
	initialBreeds: BreedCardProps[];
}

export const InfiniteBreedList: React.FC<InfiniteBreedListProps> = ({ initialBreeds }) => {
	const [breeds, setBreeds] = useState<BreedCardProps[]>(initialBreeds);
	const [page, setPage] = useState(2);
	const [hasMore, setHasMore] = useState(true);

	const loadMoreBreeds = async () => {
		const dogUrl = `${endpoints.dogs}?limit=10&page=${page}`;
		const catUrl = `${endpoints.cats}?limit=10&page=${page}`;

		const [newDogBreeds, newCatBreeds] = await Promise.all([
			fetchData(dogUrl),
			fetchData(catUrl),
		]);

		const newBreeds = [...newDogBreeds, ...newCatBreeds].map((breed) => ({
			id: breed.id,
			name: breed.name,
			image: breed.image || {
				url: `https://cdn2.${isDogId(breed.id) ? 'thedogapi' : 'thecatapi'}.com/images/${breed.reference_image_id}.jpg`
			},
			description: breed?.description || `${breed?.temperament} - ${breed?.bred_for}`
		}));

		setBreeds((prev) => [...prev, ...newBreeds]);
		setPage((prev) => prev + 1);

		if (newBreeds.length === 0) {
			setHasMore(false);
		}
	};

	return (
		<InfiniteScroll
			dataLength={breeds.length}
			next={loadMoreBreeds}
			hasMore={hasMore}
			loader={<div className="text-center mt-6"><Loader /></div>}
			endMessage={<p className="text-center mt-6">No more breeds to load.</p>}
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{breeds.map((breed) => (
					<BreedCard key={breed.id} id={breed.id} description={breed.description} name={breed.name} image={breed.image} />
				))}
			</div>
		</InfiniteScroll>
	);
};