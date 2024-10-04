'use client';
import { BreedCardProps } from '@/lib/interface';
import { isDogId } from '@/util';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export const BreedCard: React.FC<BreedCardProps> = ({ name, image, id, description }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(image?.url || '/dog-cat.png');

  const handleError = () => {
    setImgSrc('/dog-cat.png');
  };

  // Check if the breed is a dog
  const isDog = isDogId(id);

  return (
    <div className="flex flex-col bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-300 rounded-xl shadow-lg overflow-hidden transition hover:shadow-xl transform hover:scale-[1.03] duration-300 ease-out">
      <Link href={`/breed/${id}`} className="group">
        <div className="relative w-full h-60 bg-gray-200 overflow-hidden">
          <Image
            width={500}
            height={500}
            src={imgSrc}
            alt={name}
            className={`object-cover w-full h-full transition-transform duration-700 ease-out ${isLoading ? 'blur-sm' : 'blur-0'} group-hover:scale-110`}
            onLoad={() => setIsLoading(false)}
            onError={handleError}
          />
          {/* Bree Indicator */}
          <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-orange-600 rounded-full bg-orange-200`}>
            {isDog ? 'Dog' : 'Cat'}
          </span>
        </div>

        <div className="flex flex-col px-6 py-4 bg-white rounded-b-2xl">
          <h3 className="text-lg font-semibold text-gray-800 tracking-wide group-hover:text-orange-500 transition-colors duration-300 ease-out">
            {name}
          </h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2 group-hover:text-gray-700 transition-colors duration-300 ease-out">
            {description}
          </p>
          <div className="flex justify-end mt-4">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-orange-600 bg-orange-100 rounded-full group-hover:bg-orange-200 transition-colors duration-300 ease-out">
              Learn More
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
