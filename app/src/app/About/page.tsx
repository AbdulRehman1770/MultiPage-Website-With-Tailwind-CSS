import React from 'react';
import Link from 'next/link';

const About: React.FC = () => (
    <div className="min-h-screen bg-gray-50">
        <header className="py-10 bg-[#1a237e] text-white text-center">
            <h1 className="text-4xl font-bold">About Us</h1>
        </header>

        <nav className="text-center py-4 bg-gray-200">
            <Link href="/">Home</Link> | <Link href="/About">About Us</Link> | <Link href="/Services">Services</Link> | <Link href="/Contact">Contact</Link>
        </nav>

        <section className="py-20 px-6 max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700">
                Our agency is dedicated to providing impactful digital marketing solutions. With a team of creative strategists and a focus on results, we help businesses connect with their audience and grow online.
            </p>
        </section>
    </div>
);

export default About;
