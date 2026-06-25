import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHospitalSymbol } from "react-icons/fa";

const SignIn = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-10">
      <div className="max-w-7xl w-[90%] bg-white rounded-3xl shadow-2xl overflow-hidden">

        <div className="grid lg:grid-cols-2">

          {/* Left Side */}
          <div className="bg-blue-600 text-white p-12 flex flex-col justify-center">

            <div className="flex items-center gap-3 mb-8">
              <FaHospitalSymbol className="text-4xl" />
              <h1 className="text-3xl font-bold">
                MediTrack
              </h1>
            </div>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Your Health,
              <br />
              Our Priority
            </h2>

            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Join MediTrack and gain access to healthcare services,
              appointment scheduling, medical records, and professional
              healthcare support all in one place.
            </p>

            <div className="space-y-4">

              <div className="bg-white/10 p-4 rounded-xl">
                Secure Medical Records
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                Easy Appointment Scheduling
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                Access To Qualified Specialists
              </div>

            </div>

            <div className="mt-10">
              <Image
                src="/images/treatment-4099432_1280.jpg"
                alt="Healthcare"
                width={500}
                height={350}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="p-10 lg:p-16 flex flex-col justify-center">

            <div className="mb-10">
              <h2 className="text-4xl font-bold text-gray-800">
                Create Account
              </h2>

              <p className="text-gray-500 mt-3">
                Start your healthcare journey with MediTrack.
              </p>
            </div>

            <form className="space-y-5">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-5 py-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full px-5 py-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full px-5 py-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full px-5 py-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
              >
                Create Account
              </button>

            </form>

            <p className="text-center text-gray-500 mt-8">
              Already have an account?
              <Link
                href="/login"
                className="text-blue-600 font-semibold ml-2"
              >
                Sign In
              </Link>
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SignIn;