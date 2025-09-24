import React from 'react';
import Image from 'next/image';

interface Props {
  service: string;
  image: any;
  description: string;
}

const ServiceCard = ({ service, image, description }: Props) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 w-auto flex flex-col items-center text-center hover:shadow-lg transition duration-300">
      <div className="h-40 w-60 mb-4 relative">
        <Image
          src={image}
          alt="servicecardimage"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
          unoptimized/>
      </div>
      <h1 className="text-lg font-semibold text-blue-700 mb-2">{service}</h1>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm transition">
        Get Service
      </button>
    </div>
  );
};

export default ServiceCard
