import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => (
  <div className="bg-gray-50 min-h-screen">
    <header className="text-center py-10 bg-[#1a237e] text-white">
      <h1 className="text-4xl font-bold">Welcome to Our Digital Marketing Agency</h1>
      <p className="mt-4 text-lg">Empowering businesses with creative and data-driven marketing strategies.</p>
    </header>

    <nav className="text-center py-4 bg-gray-200">
      <Link href="/">Home</Link> | <Link href="/About">About Us</Link> | <Link href="/Services">Services</Link> | <Link href="/Contact">Contact</Link>
    </nav>

    <section className="py-20 px-6">
      <h2 className="text-3xl font-semibold text-center mb-6 text-[#1a237e]">Our Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {["SEO", "Social Media Marketing", "Content Creation"].map((service) => (
          <div key={service} className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg text-center transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4 text-[#009688]">{service}</h3>
            <p className="text-gray-600">Professional {service.toLowerCase()} to boost your business.</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-20 px-6 bg-[#f5f5f5]">
      <h2 className="text-3xl font-semibold text-center mb-6 text-[#1a237e]">Why Choose Us</h2>
      <p className="text-lg text-center max-w-2xl mx-auto text-gray-700">
        Our team combines innovation and expertise to deliver solutions that help your business reach new heights. Whether it’s brand growth, lead generation, or creative strategies, we’re here to make it happen.
      </p>
    </section>
  </div>
);

export default Home;
