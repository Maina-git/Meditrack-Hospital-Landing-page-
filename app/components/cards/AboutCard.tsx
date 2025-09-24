import React from 'react';
import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  image: any;
}

const AboutCard = ({ title, description, image }: Props) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center gap-6 p-6 my-6 bg-white rounded-2xl  hover:shadow-lg transition">
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="rounded-xl object-cover shadow-sm"
        />
      </div>
      <div className="text-center sm:text-left">
        <h2 className="text-blue-600 font-semibold text-2xl mb-2">{title}</h2>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
