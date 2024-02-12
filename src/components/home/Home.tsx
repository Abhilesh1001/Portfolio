// pages/index.js

import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to My Portfolio</h1>
        <p className="text-gray-700 text-center mb-6">I am passionate about building innovative web applications that solve real-world problems.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/about" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline block text-center">
                 About Me
          </Link>
          <Link href="/projects" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline block text-center">My Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
