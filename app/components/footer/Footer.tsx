import React from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHospitalSymbol,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300">

      {/* Top CTA */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div>
            <h2 className="text-3xl font-bold text-white">
              Need Medical Assistance?
            </h2>
            <p className="text-gray-400 mt-2">
              Schedule an appointment with our healthcare specialists today.
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white font-semibold transition">
            Book Appointment
          </button>

        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3 mb-5">
              <FaHospitalSymbol className="text-blue-500 text-3xl" />

              <h2 className="text-3xl font-bold text-white">
                <span className="text-blue-500">Medi</span>
                Track
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed">
              MediTrack is dedicated to providing high-quality healthcare
              services through innovation, compassion, and professional
              excellence.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-white font-bold text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  href="/home"
                  className="hover:text-blue-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-400 transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/doctors"
                  className="hover:text-blue-400 transition"
                >
                  Doctors
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition"
                >
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-white font-bold text-xl mb-5">
              Healthcare Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>General Consultation</li>
              <li>Emergency Care</li>
              <li>Laboratory Services</li>
              <li>Pharmacy Support</li>
              <li>Patient Records</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-white font-bold text-xl mb-5">
              Contact Information
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                <span>Nairobi, Kenya</span>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="text-blue-500 mt-1" />
                <span>+254 700 123 456</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-blue-500 mt-1" />
                <span>support@meditrack.com</span>
              </div>

              <div className="flex gap-3">
                <FaClock className="text-blue-500 mt-1" />
                <span>Open 24 Hours</span>
              </div>

            </div>

            {/* Emergency Card */}
            <div className="mt-6 bg-blue-600 p-4 rounded-2xl">

              <h4 className="font-bold text-white">
                Emergency Hotline
              </h4>

              <p className="text-blue-100 mt-1">
                +254 700 999 999
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MediTrack. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-blue-400 cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-blue-400 cursor-pointer">
              Terms of Service
            </span>

            <span className="hover:text-blue-400 cursor-pointer">
              Support
            </span>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;