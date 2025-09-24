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
