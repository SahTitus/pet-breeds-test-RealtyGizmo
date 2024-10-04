'use client';
import { endpoints } from '@/lib/constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';

interface BreedDetailProps {
  breed: any;
  isDog: boolean;
}

export const BreedContent: React.FC<BreedDetailProps> = ({ breed, isDog }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(`${isDog ? endpoints.dogImg : endpoints.catImg}${breed.reference_image_id}.jpg`);

  const router = useRouter();

  const handleError = () => {
    setImgSrc('/dog-cat.png');
  };

  if (!breed) {
    return <div className="text-center text-xl text-gray-600">Breed not found</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <BiArrowBack onClick={() => router.back()} className="absolute left-10 top-8 text-3xl cursor-pointer text-gray-800" />
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 sm:mb-8 text-gray-800">{breed.name}</h1>

      <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8 sm:mb-10">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <div
            className={`relative w-full h-72 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg ${
              isLoading ? 'animate-pulse bg-gray-300' : ''
            }`}
          >
            <Image
              src={imgSrc}
              alt={breed.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              onLoadingComplete={() => setIsLoading(false)}
              onError={handleError}
              blurDataURL={imgSrc}
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-700">Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p><strong>Origin:</strong> {breed.origin || 'N/A'}</p>
            <p><strong>Life Span:</strong> {breed.life_span || 'N/A'}</p>
            <p><strong>Temperament:</strong> {breed.temperament || 'N/A'}</p>
            <p><strong>Weight:</strong> {breed.weight ? `${breed.weight.imperial} lbs` : 'N/A'}</p>
            <p><strong>Height:</strong> {breed.height ? `${breed.height.imperial} in` : 'N/A'}</p>
            <p><strong>Hypoallergenic:</strong> {breed.hypoallergenic ? 'Yes' : 'No'}</p>
            <p><strong>Affection Level:</strong> {breed.affection_level || 'N/A'}</p>
            <p><strong>Child Friendly:</strong> {breed.child_friendly || 'N/A'}</p>
            <p><strong>Dog Friendly:</strong> {breed.dog_friendly || 'N/A'}</p>
            <p><strong>Energy Level:</strong> {breed.energy_level || 'N/A'}</p>
            <p><strong>Health Issues:</strong> {breed.health_issues || 'N/A'}</p>
            <p><strong>Intelligence:</strong> {breed.intelligence || 'N/A'}</p>
            <p><strong>Shedding Level:</strong> {breed.shedding_level || 'N/A'}</p>
            <p><strong>Social Needs:</strong> {breed.social_needs || 'N/A'}</p>
            <p><strong>Stranger Friendly:</strong> {breed.stranger_friendly || 'N/A'}</p>
            <p><strong>Vocalisation:</strong> {breed.vocalisation || 'N/A'}</p>
          </div>
          <a
            href={breed.wikipedia_url}
            className="block mt-4 sm:mt-6 text-blue-500 hover:text-blue-700 font-semibold underline text-center cursor-pointer"
          >
            Learn more on Wikipedia
          </a>
        </div>
      </div>

      <div className="bg-gradient-to-r from-white to-blue-100 p-4 sm:p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-700">Description</h2>
        <p className="text-base sm:text-lg text-gray-600">{breed.description || 'No description available'}</p>
      </div>
    </div>
  );
};
