import React from 'react'
import Link from 'next/link'

const Homepagety = () => {
  return (
    <div className="min-h-screen flex flex-col items-center dark:bg-gray-950 bg-green-600">
    <div className="max-w-md p-8 mt-40 dark:bg-gray-800 bg-green-400 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to My Portfolio</h1>
      <p className="dark:text-gray-50 text-gray-950 text-center mb-6 ">I am passionate about building innovative web applications that solve real-world problems.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/about" className="bg-blue-800 hover:bg-blue-800 text-gray-50 font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline block text-center">
               About Me
        </Link>
        <Link href="/projects" className="dark:bg-green-500 bg-green-200 hover:bg-green-600 dark:text-gray-50 text-gray-950 font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline block text-center">My Projects
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Homepagety