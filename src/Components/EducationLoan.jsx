import React from 'react';
import { Link } from 'react-router-dom';

const EducationLoan = () => {
  return (
    <div className="  ">
    <div className="bg-[url('https://img.freepik.com/free-photo/arrangement-education-growth-concept_23-2148721288.jpg?ga=GA1.2.1408907841.1721685451&semt=ais_hybrid')] bg-cover bg-center h-3/4">
    <div className='flex justify-between '>
    <div className="flex flex-col  text-start  w-[50%] pt-40 text-white pb-20 pl-6">
      <h1 className="text-4xl" >"Invest in your dreams today, learn without limits tomorrow!"</h1>
      <p className="pl-20 pt-6 ">"Invest in your dreams today, learn without limits tomorrow!"</p>
      <h4 className="text-xl pl-20">"Education is your passport; we make the journey possible!"</h4>
      <div className="pl-20 pt-6 flex space-x-4">
        <button className=" border-2 w-40 h-8 "><Link to="applynow">Apply Now</Link></button>
      
        <Link to="emicalculator"><button className='border-2 w-52 h-8'>EMI Calculator</button></Link>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default EducationLoan;
