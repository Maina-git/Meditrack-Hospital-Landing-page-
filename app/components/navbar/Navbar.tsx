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
      {/* logo */}
      <div className="px-5 flex gap-5 items-center">
        <FaHospitalSymbol className="text-4xl font-bold text-blue-500" />
      <h1 className="text-black font-bold"><span className="text-2td5xl text-blue-500">M</span>ediTrack</h1>
      </div>

      {/* nav link items */}
      <div className="flex items-center gap-10">
        {NavItems.map((item) => (
          <Link key={item.id} href={item.page} className="text-gray-500 text-sm">
            {item.title}
          </Link>
        ))}
      </div>

      {/* buttons */}
      <div className="flex gap-5 justify-between items-center px-5">
        <button className="bg-blue-500 px-5 py-2 text-white rounded-lg text-sm">
          Sign In
        </button>
        <button className="border-[2px] border-blue-500 px-5 py-2 text-sm rounded-lg text-blue-900">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
