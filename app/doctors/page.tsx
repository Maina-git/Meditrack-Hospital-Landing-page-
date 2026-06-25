/*
import React from "react";
import Image from "next/image";
import DoctorsCard from "../components/cards/DoctorsCard";
import { DoctorServices } from "../data/Data";

const page = () => {  
  return (
    <div className="bg-blue-100 min-h-screen pb-16 pt-16">
    
      <div className="w-[90%] md:w-[80%] bg-white p-10 rounded-lg mx-auto flex flex-col items-center">
        <div className="w-full md:w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col gap-5 justify-center">
            <h1 className="font-bold text-5xl text-blue-500">
              What our <span className="text-black">Doctors do!</span>
            </h1>
            <p className="text-gray-600">
              Our doctors provide expert medical care through accurate
              diagnosis, effective treatment, and personalized follow-up. They
              work with compassion and professionalism to ensure every patient
              receives the best possible healthcare and support.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <Image
              src="/images/surgery-1807541_1280.jpg"
              alt="Doctors"
              width={300}
              height={300}
              className="shadow-md"
            />
          </div>
        </div>

     
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {DoctorServices.map((item) => {
            /*const Icon = item.icon; 
             return (
                 <DoctorsCard 
                 key={item.id}
                 Icon={item.icon}
                 title={item.title}
                 description={item.description}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
*/

import React from "react";
import Image from "next/image";
import DoctorsCard from "../components/cards/DoctorsCard";
import { DoctorServices } from "../data/Data";
import { FaUserMd, FaHeartbeat, FaAward, FaHospital } from "react-icons/fa";

const Page = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="grid md:grid-cols-2 gap-10 p-10 lg:p-16">

            {/* Left Content */}
            <div className="flex flex-col justify-center">

              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium w-fit mb-5">
                Meet Our Medical Experts
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Dedicated Doctors
                <span className="text-blue-600"> Committed To Your Care</span>
              </h1>

              <p className="text-gray-600 text-lg mt-6 leading-relaxed">
                Our team of highly qualified physicians, specialists, surgeons,
                and healthcare professionals are committed to providing
                exceptional medical care using the latest technologies and
                evidence-based treatments.
              </p>

              <p className="text-gray-600 mt-4 leading-relaxed">
                From preventive healthcare and diagnostics to specialized
                treatments and long-term patient support, our doctors work
                tirelessly to improve the health and well-being of every
                individual we serve.
              </p>

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg transition w-fit">
                Schedule Consultation
              </button>

            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center">
              <Image
                src="/images/surgery-1807541_1280.jpg"
                alt="Doctors"
                width={550}
                height={550}
                className="rounded-3xl shadow-xl object-cover"
              />
            </div>

          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t">

            <div className="p-8 text-center">
              <FaUserMd className="mx-auto text-blue-600 text-3xl mb-3" />
              <h3 className="text-3xl font-bold">150+</h3>
              <p className="text-gray-500">Experienced Doctors</p>
            </div>

            <div className="p-8 text-center border-l">
              <FaHeartbeat className="mx-auto text-blue-600 text-3xl mb-3" />
              <h3 className="text-3xl font-bold">25K+</h3>
              <p className="text-gray-500">Patients Treated</p>
            </div>

            <div className="p-8 text-center border-l">
              <FaAward className="mx-auto text-blue-600 text-3xl mb-3" />
              <h3 className="text-3xl font-bold">98%</h3>
              <p className="text-gray-500">Success Rate</p>
            </div>

            <div className="p-8 text-center border-l">
              <FaHospital className="mx-auto text-blue-600 text-3xl mb-3" />
              <h3 className="text-3xl font-bold">30+</h3>
              <p className="text-gray-500">Medical Departments</p>
            </div>

          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mt-20 mb-14">

          <span className="text-blue-600 uppercase tracking-wider font-semibold">
            Our Expertise
          </span>

          <h2 className="text-5xl font-bold mt-4">
            What Our Doctors Do
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mt-5 text-lg">
            Our healthcare professionals provide a wide range of medical
            services, ensuring patients receive comprehensive care from
            diagnosis through treatment and recovery.
          </p>

        </div>

        {/* Doctor Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {DoctorServices.map((item) => (
            <DoctorsCard
              key={item.id}
              Icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-blue-600 rounded-3xl p-12 text-center text-white shadow-xl">

          <h2 className="text-4xl font-bold">
            Looking For Expert Medical Advice?
          </h2>

          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Connect with our experienced healthcare professionals and receive
            personalized care tailored to your medical needs.
          </p>

          <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition">
            Book An Appointment
          </button>

        </div>

      </div>
    </section>
  );
};

export default Page;



