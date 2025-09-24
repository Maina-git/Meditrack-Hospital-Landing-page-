import React from 'react';

interface Props{
    Icon:any,
    title:string,
    description:string
}

const DoctorsCard = ({Icon, title, description}:Props) => {
  return (
    <div className="bg-blue-50 p-6 rounded-xl shadow hover:shdow-lg transition flex flex-col items-center text-center">
      <Icon className="text-blue-500 text-5xl mb-4"/>
        <h2 className="text-lg font-semibold text-blue-700">
                  {title}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  {description}
                </p>
            </div>
  );
}

export default DoctorsCard;
