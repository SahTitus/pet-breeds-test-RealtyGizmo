import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">About Us</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At PetBreeds, our mission is to connect pet lovers with the best information on dog and cat breeds. 
            We strive to educate and inform our community about responsible pet ownership and breed-specific needs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Our Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We envision a world where every pet owner has access to the resources and support they need to provide the best possible care for their furry friends. 
            We aim to be a trusted source of information and a vibrant community for pet lovers everywhere.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Sah Titus Samuel</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="mt-2 text-gray-500">Titus is passionate about animal welfare and has dedicated his life to educating others about pet care.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Kwabenah Sah Titus</h3>
              <p className="text-gray-600">Co-founder & CTO</p>
              <p className="mt-2 text-gray-500">Sah combines his love for technology and animals to create innovative solutions for pet owners.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Samuel Titus Sah</h3>
              <p className="text-gray-600">Community Manager</p>
              <p className="mt-2 text-gray-500">Ibrahim works to build a strong community of pet lovers and ensures everyone feels welcome.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};