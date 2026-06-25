/*
import React from 'react';
import { ServiceItem } from '../data/Data';
import ServiceCard from '../components/cards/ServiceCard';
import Image from 'next/image';

const Services = () => {
  return (
    <div className="w-full bg-blue-50 py-16">
      <div className="w-[90%] md:w-[85%] bg-white mx-auto p-10 rounded-lg">
      <div className="flex flex-col md:flex-row mb-10">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-5">
        <Image src="/images/blood-pressure-monitor-1749577_1280.jpg" alt="serviceimg" width={400} height={400}/>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-2 p-5">
        <h2 className="text-5xl font-bold text-blue-700">What are <span className="text-black">our Services</span></h2>
        <p className="text-gray-600 mt-2">
          Our hospital is a modern healthcare facility dedicated to providing affordable, high-quality, and 
          compassionate care to individuals and families. We offer a wide range of services including outpatient 
          consultations, inpatient care, emergency treatment, maternity and child health, surgical services, 
          laboratory diagnostics, and pharmacy support.
        </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
        {ServiceItem.map((item) => (
          <ServiceCard
            key={item.id}
            service={item.service}
            image={item.image}
            description={item.Description}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Services;
*/

import React from "react";
import { ServiceItem } from "../data/Data";
import ServiceCard from "../components/cards/ServiceCard";
import Image from "next/image";
import { FaUserMd, FaHospital, FaHeartbeat, FaFlask } from "react-icons/fa";

const Services = () => {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="grid md:grid-cols-2 gap-10 p-10 lg:p-16">

            {/* Image */}
            <div className="flex justify-center items-center">
              <Image
                src="/images/blood-pressure-monitor-1749577_1280.jpg"
                alt="Medical Services"
                width={550}
                height={550}
                className="rounded-3xl shadow-lg object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">

              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium w-fit mb-5">
                Comprehensive Healthcare Services
              </span>

              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Quality Care For
                <span className="text-blue-600"> Every Patient</span>
              </h2>

              <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                MediTrack Hospital provides a full spectrum of healthcare
                services designed to improve the well-being of our patients.
                From preventive care and routine consultations to specialized
                treatments and emergency services, our dedicated team ensures
                every patient receives personalized and compassionate care.
              </p>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Our mission is to combine modern medical technology with
                experienced healthcare professionals to deliver exceptional
                outcomes and a comfortable patient experience.
              </p>

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg transition w-fit">
                Explore Our Services
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t">

            <div className="p-8 text-center">
              <FaUserMd className="mx-auto text-3xl text-blue-600 mb-3" />
              <h3 className="text-3xl font-bold">150+</h3>
              <p className="text-gray-500">Specialists</p>
            </div>

            <div className="p-8 text-center border-l">
              <FaHospital className="mx-auto text-3xl text-blue-600 mb-3" />
              <h3 className="text-3xl font-bold">30+</h3>
              <p className="text-gray-500">Departments</p>
            </div>

            <div className="p-8 text-center border-l">
              <FaHeartbeat className="mx-auto text-3xl text-blue-600 mb-3" />
              <h3 className="text-3xl font-bold">25K+</h3>
              <p className="text-gray-500">Patients Treated</p>
            </div>

            <div className="p-8 text-center border-l">
              <FaFlask className="mx-auto text-3xl text-blue-600 mb-3" />
              <h3 className="text-3xl font-bold">98%</h3>
              <p className="text-gray-500">Success Rate</p>
            </div>

          </div>
        </div>

        {/* Services Heading */}
        <div className="text-center mt-20 mb-12">

          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Our Medical Services
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Healthcare Solutions You Can Trust
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mt-5 text-lg">
            We provide a broad range of healthcare services tailored to meet
            the needs of patients of all ages. Our experienced professionals
            use advanced technology to ensure accurate diagnoses and effective
            treatment plans.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {ServiceItem.map((item) => (
            <ServiceCard
              key={item.id}
              service={item.service}
              image={item.image}
              description={item.Description}
            />
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-blue-600 rounded-3xl p-12 text-center text-white shadow-xl">

          <h2 className="text-4xl font-bold">
            Need Medical Assistance?
          </h2>

          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Schedule an appointment with one of our experienced healthcare
            professionals today and take the first step toward better health.
          </p>

          <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition">
            Book Appointment
          </button>

        </div>

      </div>
    </section>
  );
};

export default Services;





