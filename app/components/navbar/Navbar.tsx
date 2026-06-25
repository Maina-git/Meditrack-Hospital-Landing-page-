/*
import React from 'react';
import Link from 'next/link';
import { FaHospitalSymbol } from "react-icons/fa";

const Navbar = () => {

  const NavItems = [
    {
      id: 1,
      title: "Home",
      page: "/home"
    },
    {
      id: 2,
      title: "Services",
      page: "/services"
    },
    {
      id: 3,
      title: "Doctors",
      page: "/doctors"
    },
    {
      id: 4,
      title: "About Us",
      page: "/about"
    },
    {
      id: 5,
      title: "Contact Us",
      page: "/contact"
    },
  ];

  return (
    <div className="w-full p-5 flex justify-between items-center">
    
      <div className="px-5 flex gap-5 items-center">
        <FaHospitalSymbol className="text-4xl font-bold text-blue-500" />
      <h1 className="text-black font-bold"><span className="text-2td5xl text-blue-500">M</span>ediTrack</h1>
      </div>

  
      <div className="flex items-center gap-10">
        {NavItems.map((item) => (
          <Link key={item.id} href={item.page} className="text-gray-500 text-sm">
            {item.title}
          </Link>
        ))}
      </div>

    
      <div>
        <Link href="/auth">
        <button className="border-[2px] border-blue-500 px-5 py-2 text-sm rounded-lg text-blue-900">
          Sign Up
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
*/

import React from "react";
import Link from "next/link";
import { FaHospitalSymbol } from "react-icons/fa";

const Navbar = () => {
  const NavItems = [
    {
      id: 1,
      title: "Home",
      page: "/home",
    },
    {
      id: 2,
      title: "Services",
      page: "/services",
    },
    {
      id: 3,
      title: "Doctors",
      page: "/doctors",
    },
    {
      id: 4,
      title: "About Us",
      page: "/about",
    },
    {
      id: 5,
      title: "Contact Us",
      page: "/contact",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-blue-100 transition-all duration-300">
            <FaHospitalSymbol className="text-3xl text-blue-600" />
          </div>

          <h1 className="font-extrabold text-2xl tracking-tight">
            <span className="text-blue-600">Medi</span>
            <span className="text-gray-900">Track</span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {NavItems.map((item) => (
            <Link
              key={item.id}
              href={item.page}
              className="relative text-gray-600 font-medium hover:text-blue-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/login">
            <button className="text-gray-700 font-medium hover:text-blue-600 transition">
              Login
            </button>
          </Link>

          <Link href="/auth">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;












