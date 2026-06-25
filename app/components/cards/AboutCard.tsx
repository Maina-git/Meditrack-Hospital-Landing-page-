import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
}

const AboutCard = ({ title, description, image }: Props) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      <div className="flex flex-col md:flex-row">

        {/* Image Section */}
        <div className="relative md:w-80 h-72 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-8 flex flex-col justify-center">

          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-xs font-semibold w-fit mb-4">
            About MediTrack
          </span>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {title}
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>

          <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition w-fit">
            Learn More →
          </button>

        </div>

      </div>
    </div>
  );
};

export default AboutCard;


