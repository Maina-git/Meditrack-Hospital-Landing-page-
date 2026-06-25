
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaHospitalSymbol } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-blue-50 p-3 rounded-xl">
            <FaHospitalSymbol className="text-3xl text-blue-600" />
          </div>

          <h1 className="font-extrabold text-2xl tracking-tight">
            <span className="text-blue-600">Medi</span>
            <span className="text-gray-900">Track</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {NavItems.map((item) => (
            <Link
              key={item.id}
              href={item.page}
              className="relative text-gray-700 font-medium hover:text-blue-600 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <button className="text-gray-700 hover:text-blue-600 font-medium transition">
              Login
            </button>
          </Link>

          <Link href="/auth">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-3xl"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-6 py-6 shadow-lg">

          {/* Mobile Links */}
          <div className="flex flex-col gap-5">
            {NavItems.map((item) => (
              <Link
                key={item.id}
                href={item.page}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <button className="w-full border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-50 transition">
                Login
              </button>
            </Link>

            <Link href="/auth" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Extra Info */}
          <div className="mt-6 bg-blue-50 p-4 rounded-xl">
            <h3 className="text-blue-700 font-semibold">
              Trusted Healthcare Platform
            </h3>

            <p className="text-gray-600 text-sm mt-2">
              Connect with healthcare professionals, explore medical services,
              and manage your healthcare journey with MediTrack.
            </p>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;






