import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="bg-[#131316] h-screen flex flex-col justify-center items-center">

      <div className="w-[30%] sm:w-[25%] lg:w-[10%] mb-5">
        <img 
          src="/images/MyHead.jpg" 
          alt="My Head" 
          className="rounded-full object-cover border-2 border-yellow-600"
        />
      </div>
      
      <div className="text-center">
        <h1 className="text-5xl font-normal mb-6">
          <span className="text-4xl text-gray-300">Hi I'm </span>
          <span className="font-semibold text-yellow-600">Jesse</span>
        </h1>
        <p className="text-2xl mb-8 text-gray-300">A passionate Software Developer</p>
        <p className="text-sm mb-8 text-gray-400">I can also make a mean latte</p>
      </div>

    </section>
  );
};

export default Landing;
