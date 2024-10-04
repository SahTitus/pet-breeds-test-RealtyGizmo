'use client'
import { HeroSectionProps } from '@/lib/interface';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BiArrowBack, BiSearch } from 'react-icons/bi';

export const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImage, heading, subheading,defaultSearchTerm }) => {

	const [searchTerm, setSearchTerm] = useState(defaultSearchTerm);
	const router = useRouter();

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleSearchSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		router.push(`/search?q=${searchTerm}`)
	};

	return (
		<div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
			      <BiArrowBack onClick={() => router.back()} className="z-30 absolute left-10 top-8 text-3xl cursor-pointer text-white" />

			<Image
				fill
				src={backgroundImage}
				alt="Hero Background"
				className="absolute top-0 left-0 w-full h-full object-cover object-center"
			/>
			<div className="absolute inset-0 bg-black opacity-30"></div>
			<div className="relative z-10 text-center text-white p-8">
				<h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">{heading}</h1>
				<p className="mt-4 text-lg md:text-2xl drop-shadow-md">{subheading}</p>

				<form onSubmit={handleSearchSubmit} className="flex items-center justify-center my-6 h-12">
					<input
						type="text"
						value={searchTerm}
						onChange={handleSearchChange}
						placeholder="Search for breeds..."
						className="text-black h-full px-4 py-2 w-80 md:w-96 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-400"
					/>
					<button
						type="submit"
						className="h-full bg-slate-900 hover:bg-slate-700 text-white px-4 py-2 rounded-r-md transition duration-300"
					>
						<BiSearch />
					</button>
				</form>

				<Link href="#breeds"
					className="mt-14 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition duration-300"
				>
					Explore Now
				</Link>
			</div>
		</div>
	);
};