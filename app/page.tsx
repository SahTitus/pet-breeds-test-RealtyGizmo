import React from 'react';
import { fetchData } from '@/lib/fetchData';
import { endpoints } from '@/lib/constants';
import { InfiniteBreedList } from '@/components/InfiniteBreedList';
import { HeroSection } from '@/components/HeroSection';
import { Navbar } from '@/components/Navbar';
import { About } from '@/components/pages/About';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/pages/Contact';
import { isDogId } from '@/util';

export default async function Home() {
  const dogBreedsPromise = fetchData(`${endpoints.dogs}?limit=10&page=1&attach_image=1`);
  const catBreedsPromise = fetchData(`${endpoints.cats}?limit=10&page=1&attach_image=1`);

  const [dogsData, catsData] = await Promise.all([dogBreedsPromise, catBreedsPromise]);

  // Combine initial breeds
  const initialBreeds = [...dogsData, ...catsData].map((breed) => ({
    id: breed.id,
    name: breed.name,
    image: breed.image || {
      url: `https://cdn2.${isDogId(breed.id) ? 'thedogapi' : 'thecatapi'}.com/images/${breed.reference_image_id}.jpg`
    },
    description: breed?.description || `${breed?.temperament} | ${breed?.bred_for}`
  }));

  return (
    <main>
      <Navbar />
      <HeroSection
        defaultSearchTerm=''
        backgroundImage="/dog-cat.png"
        heading="Explore the World of Pets"
        subheading="Discover the most amazing breeds of cats and dogs"
      />
      <section id='breeds' className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Browse Breeds</h2>
        <InfiniteBreedList initialBreeds={initialBreeds} />
      </section>

      <section id='about'>
        <About />
      </section>
      <section id='contact'>
        <Contact />
      </section>

      <Footer />
    </main>
  );
};