import React from 'react';
import Image from 'next/image';
import { AboutUsData } from '../data/Data';
import AboutCard from '../components/cards/AboutCard';

const page = () => {
  return (
    <div className="w-full  bg-blue-100 pb-10 pt-10">
        <div className="w-[90%] md:w-[80%] bg-white mx-auto rounded-lg p-10">
           <div className="w-full flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2">
             <h1 className="text-5xl font-bold">About <span className="text-blue-500">Us</span></h1>
            <p className="text-gray-500">Committed to delivering compassionate, reliable, and quality healthcare that puts patients first.</p>
            </div>
            <div className="w-full md:w-1/2">
            <Image src="/images/dentist-428645_1280.jpg" width={500} height={500} alt=""/>
            </div>
           </div>
           <div className="w-full">
            {
              AboutUsData.map((item)=>{
                return (
                    <AboutCard 
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}/>
                )
              })
            }
           </div>
        </div>
    </div>
  );
}

export default page;
