import React from 'react';

const Footer = () => {
  return (
    <div className="bg-blue-950  pt-16 pb-16">
        <div className="w-[80%] mx-auto flex items-center justify-between">
        <div>
            <ul className="flex flex-col gap-1">
                <li className="text-sm text-gray-400">Home</li>
                <li className="text-sm text-gray-400">About us</li>
                <li className="text-sm text-gray-400">Doctors</li>
                <li className="text-sm text-gray-400">Sponsors</li>
            </ul>
        </div>

        <div>
            <span>&copy;Copyright 2025 All rights reserved</span>
        </div>
        </div>
      
    </div>
  );
}

export default Footer;
