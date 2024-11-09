import React from 'react';
import Link from 'next/link';

const Contact: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <header className="py-10 bg-[#1a237e] text-white text-center">
      <h1 className="text-4xl font-bold">Get In Touch</h1>
    </header>

    <nav className="text-center py-4 bg-gray-200">
      <Link href="/">Home</Link> | <Link href="/About">About Us</Link> | <Link href="/Services">Services</Link> | <Link href="/Contact">Contact</Link>
    </nav>

    <section className="py-20 px-6 max-w-3xl mx-auto">
      <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message"></textarea>
        </div>
        <button className="bg-[#009688] hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Send Message
        </button>
      </form>
     
    </section>
  </div>
);

export default Contact;
