import React from 'react';
import Link from 'next/link';

const Services: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <header className="py-10 bg-[#1a237e] text-white text-center">
      <h1 className="text-4xl font-bold">Our Services</h1>
    </header>

    <nav className="text-center py-4 bg-gray-200">
      <Link href="/">Home</Link> | <Link href="/About">About Us</Link> | <Link href="/Services">Services</Link> | <Link href="/Contact">Contact</Link>
    </nav>

    <section className="py-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {["SEO", "Social Media Marketing", "Content Creation", "Email Marketing", "PPC Advertising", "Brand Strategy"].map((service, idx) => (
          <div key={idx} className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg text-center transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4 text-[#009688]">{service}</h2>
            <p className="text-gray-600">High-quality {service.toLowerCase()} to drive your business forward.</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
