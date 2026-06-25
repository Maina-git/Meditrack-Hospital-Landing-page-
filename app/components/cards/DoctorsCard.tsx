
import React from "react";

interface Props {
  Icon: any;
  title: string;
  description: string;
}

const DoctorsCard = ({ Icon, title, description }: Props) => {
  return (
    <div className="group bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">

    
      <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-blue-50 group-hover:bg-blue-100 transition">
        <Icon className="text-blue-600 text-4xl" />
      </div>

      {/* Content */}
      <div className="mt-6 text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          {title}
        </h2>

        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Button */}
        <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition">
          Learn More →
        </button>
      </div>
    </div>
  );
};

export default DoctorsCard;

