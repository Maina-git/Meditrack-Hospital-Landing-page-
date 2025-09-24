import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from 'next/image';
import { FaUserPlus } from 'react-icons/fa';
import { FaUserMd } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="w-full bg-blue-100 h-screen flex flex-col items-center justify-center">
   <div className=" w-[90%] md:w-80% bg-white h-auto p-10 rounded-lg shadow-md">
       <div className="w-full flex">
        <div className="w-1/2 flex flex-col items-start justify-center gap-5">
        <div className="flex flex-col gap-2 items-start">
        <h1 className="text-5xl font-bold text-blue-500">We care <span className="text-black">about your Health
            </span>
        </h1>
        <p className="text-sm text-gray-500">Good health in the state of mental physical 
        and social being and it does just mean absence of disease</p>
        </div>
        <button className="px-5 py-3 flex gap-2 justify-center bg-blue-500 text-white rounded-lg">
        Book an appointment
        <FaLongArrowAltRight/>
        </button>
        <span className="text-sm text-gray-500">Become a member of our Hospital community</span>
        </div>
       <div className="relative w-1/2">
  <Image
    src="/images/treatment-4099432_1280.jpg"
    width={400}
    height={400}
    alt="Doctors"/>

  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
    <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-2xl shadow-md hover:bg-blue-600 transition">
      <FaUserPlus /> Join Us
    </button>
    <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-2xl shadow-md hover:bg-green-600 transition">
      <FaUserMd /> Featured Doctors
    </button>
  </div>
</div>
       </div>
      </div>
    </div>
  );
}

export default Home;
