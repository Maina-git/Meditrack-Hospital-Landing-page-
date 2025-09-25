import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-gray-300 pt-16 pb-10">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    
        <div>
          <h2 className="text-white text-2xl font-bold mb-3"><span className="text-blue-600">M</span>ediTrack+</h2>
          <p className="text-gray-400 text-sm">
            Delivering trusted healthcare with compassion, professionalism, and
            innovation to improve lives every day.
          </p>
        </div>


        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-blue-400 cursor-pointer text-sm">Home</li>
            <li className="hover:text-blue-400 cursor-pointer text-sm">About Us</li>
            <li className="hover:text-blue-400 cursor-pointer text-sm">Doctors</li>
            <li className="hover:text-blue-400 cursor-pointer text-sm">Services</li>
            <li className="hover:text-blue-400 cursor-pointer text-sm">Contact</li>
          </ul>
        </div>

  
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Contact Us</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400"/> Toronto, ON, Canada
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" /> +1 (416) 555-1234
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" /> support@medicareplus.ca
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MediTrack+. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
