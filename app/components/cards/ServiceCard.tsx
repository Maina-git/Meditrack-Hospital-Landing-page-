import React from "react";
import Image from "next/image";

interface Props {
  service: string;
  image: string;
  description: string;
}

const ServiceCard = ({ service, image, description }: Props) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={service}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          unoptimized
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">

        <h2 className="text-xl font-bold text-gray-800 mb-3">
          {service}
        </h2>

        <p className="text-gray-600 leading-relaxed text-sm">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium transition">
            Get Service
          </button>

          <button className="text-blue-600 font-semibold hover:text-blue-800 transition">
            Learn More
          </button>

        </div>

      </div>
    </div>
  );
};

export default ServiceCard;











