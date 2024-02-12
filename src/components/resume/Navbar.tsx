'use client'
import { useRef, useState } from 'react';
import Link from 'next/link';
import { useReactToPrint } from 'react-to-print';
import { IoIosMenu } from 'react-icons/io';
import Resume from './Resume';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="dark:bg-gray-800 bg-green-700 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="text-white text-xl font-bold">
            Portfolio
          </Link>
        </div>
        <ul className={`flex lg:flex ${isMenuOpen ? 'flex-col' : 'hidden'}`}>
          <li>
            <Link href="/about" className="text-white hover:text-gray-200 block p-2">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-white hover:text-gray-200 block p-2">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-200 block p-2">
              Contact
            </Link>
          </li>
        </ul>
       
        <div className="lg:block">
          <div className="hidden">
            <Resume ref={componentRef} />
          </div>
          <button className="ml-10 bg-blue-600 p-2 rounded" onClick={handlePrint}>
            Download Resume
          </button>

        </div>
        <div className="lg:hidden">
          <IoIosMenu className="text-white text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
