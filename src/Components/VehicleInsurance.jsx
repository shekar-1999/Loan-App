import React from 'react';
import { Link } from 'react-router-dom';
import Requirements from './Requirements';
import Footer from './Footer';

const VehicleInsurance = () => {
  return (
    <>
    <div className="  ">
    <div className="bg-[url('https://img.freepik.com/premium-photo/retro-red-beetle-car-with-umbrella-against-teal-background-rainy-weather_94064-27024.jpg?ga=GA1.1.1408907841.1721685451&semt=ais_hybrid')] bg-cover bg-center h-3/4">
    <div className='flex justify-between '>
    <div className="flex flex-col  text-start  w-[50%] pt-40 text-white pb-20 pl-6">
      <h1 className="text-4xl" >"Protect Your Ride with Comprehensive Vehicle Insurance!"</h1>
      <p className="pl-20 pt-6 ">Get complete coverage, hassle-free claims, and 24/7 roadside assistance – drive with confidence and peace of mind.</p>
      <h4 className="text-xl pl-20">Your vehicle, your journey – safeguard it every mile!</h4>
      <div className="pl-20 pt-6 flex space-x-4">
        <button className=" border-2 w-40 h-8 "><Link to="applynow">Apply Now</Link></button>
      
        <Link to="emicalculator"><button className='border-2 w-52 h-8'>EMI Calculator</button></Link>
      </div>
    </div>
    </div>
    </div>
    </div>
    <Requirements />
    <Footer />
    </>

  );
}

export default VehicleInsurance;
