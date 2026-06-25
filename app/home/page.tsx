

import React from "react";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaUserPlus, FaUserMd } from "react-icons/fa";
import { FiShield, FiClock, FiAward } from "react-icons/fi";

const Home = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-16">
      <div className="max-w-7xl w-[90%] bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="grid md:grid-cols-2 gap-12 p-10 lg:p-16">

          {/* Left Content */}
          <div className="flex flex-col justify-center">

            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium w-fit mb-5">
              Trusted Healthcare Management Platform
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Your Health Is Our
              <span className="text-blue-600"> Highest Priority</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              MediTrack provides a seamless healthcare experience by
              connecting patients with qualified doctors, managing medical
              records securely, scheduling appointments efficiently, and
              ensuring quality healthcare services are accessible whenever
              needed.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mb-8">
              <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-7 py-4 rounded-xl flex items-center gap-3 font-medium shadow-lg">
                Book Appointment
                <FaLongArrowAltRight />
              </button>

              <button className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition px-7 py-4 rounded-xl font-medium">
                Learn More
              </button>
            </div>

            {/* Trust Features */}
            <div className="flex flex-wrap gap-6">

              <div className="flex items-center gap-3">
                <FiShield className="text-blue-600 text-2xl" />
                <span className="text-gray-700 font-medium">
                  Secure Records
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FiClock className="text-blue-600 text-2xl" />
                <span className="text-gray-700 font-medium">
                  24/7 Availability
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FiAward className="text-blue-600 text-2xl" />
                <span className="text-gray-700 font-medium">
                  Certified Specialists
                </span>
              </div>

            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex items-center justify-center">

            <div className="relative">
              <Image
                src="/images/treatment-4099432_1280.jpg"
                width={550}
                height={550}
                alt="Healthcare Team"
                className="rounded-3xl object-cover shadow-2xl"
              />

              {/* Floating Cards */}

              <div className="absolute top-6 -left-8 bg-white shadow-xl rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <FaUserMd className="text-blue-600 text-2xl" />
                  <div>
                    <h3 className="font-bold">150+</h3>
                    <p className="text-sm text-gray-500">
                      Expert Doctors
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 -right-8 bg-white shadow-xl rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <FaUserPlus className="text-green-600 text-2xl" />
                  <div>
                    <h3 className="font-bold">25,000+</h3>
                    <p className="text-sm text-gray-500">
                      Registered Patients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}

        <div className="grid grid-cols-2 md:grid-cols-4 border-t">

          <div className="p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-600">25K+</h2>
            <p className="text-gray-500 mt-2">Patients Served</p>
          </div>

          <div className="p-8 text-center border-l">
            <h2 className="text-4xl font-bold text-blue-600">150+</h2>
            <p className="text-gray-500 mt-2">Medical Experts</p>
          </div>

          <div className="p-8 text-center border-l">
            <h2 className="text-4xl font-bold text-blue-600">30+</h2>
            <p className="text-gray-500 mt-2">Departments</p>
          </div>

          <div className="p-8 text-center border-l">
            <h2 className="text-4xl font-bold text-blue-600">98%</h2>
            <p className="text-gray-500 mt-2">Patient Satisfaction</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;




