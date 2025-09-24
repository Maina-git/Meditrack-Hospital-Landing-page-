import React from "react";
import Image from "next/image";
import DoctorsCard from "../components/cards/DoctorsCard";
import { DoctorServices } from "../data/Data";

const page = () => {  
  return (
    <div className="bg-blue-100 min-h-screen pb-16 pt-16">
      {/** Doctors page */}
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

        {/** Services grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {DoctorServices.map((item) => {
            /*const Icon = item.icon; */
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
