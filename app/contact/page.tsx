import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="w-full min-h-screen pb-10 pt-10 bg-blue-100">
      <div className="w-[90%] mx-auto md:w-[80%] bg-white p-10 rounded-2xl shadow-md">
        <div className="p-6 text-center">
          <h1 className="text-black text-4xl font-bold mb-4">
            Contact <span className="text-blue-600">Us</span>
          </h1>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            We’re here to help! Reach out to us with your questions, feedback, or appointment requests, 
            and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center my-10">
          <div className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow-sm">
            <FaPhoneAlt className="text-blue-600 text-3xl mb-2" />
            <h3 className="font-semibold text-lg text-blue-700">Phone</h3>
            <p className="text-gray-600">+1 (416) 555-1234</p>
          </div>
          <div className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow-sm">
            <FaEnvelope className="text-blue-600 text-3xl mb-2" />
            <h3 className="font-semibold text-lg text-blue-700">Email</h3>
            <p className="text-gray-600">info@hospital.ca</p>
          </div>
          <div className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow-sm">
            <FaMapMarkerAlt className="text-blue-600 text-3xl mb-2" />
            <h3 className="font-semibold text-lg text-blue-700">Location</h3>
            <p className="text-gray-600">123 Health St, Toronto, ON, Canada</p>
          </div>
        </div>
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="px-5 py-3 bg-gray-100 rounded-lg outline-none w-full"/>
            <input
              type="email"
              placeholder="Email"
              className="px-5 py-3 bg-gray-100 rounded-lg outline-none w-full"/>
            <input
              type="text"
              placeholder="Phone"
              className="px-5 py-3 bg-gray-100 rounded-lg outline-none w-full"/>
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full bg-gray-100 p-5 rounded-lg outline-none min-h-[150px]"/>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mx-auto md:mx-0">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
