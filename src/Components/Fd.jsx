import React from 'react';
import { Link } from 'react-router-dom';
import Requirements from './Requirements';
import Footer from './Footer';
import { HashLink } from 'react-router-hash-link';

const Fd = () => {
  return (
    <>
    <div className="  ">
    <div className="bg-[url('https://img.freepik.com/premium-photo/stacked-coins-colorful-background-with-vibrant-hues-daylight_984102-19258.jpg?ga=GA1.1.1408907841.1721685451&semt=ais_hybrid')] bg-cover bg-center h-3/4">
    <div className='flex justify-between '>
    <div className="flex flex-col  text-start  w-[50%] pt-40 text-white pb-20 pl-6">
      <h1 className="text-4xl" >"Secure Your Tomorrow with a High-Interest Fixed Deposit!"</h1>
      <p className="pl-20 pt-6 ">Enjoy guaranteed returns, flexible tenure options, and peace of mind knowing your money is working for you.</p>
      <h4 className="text-xl pl-20">Invest today, relax tomorrow – your future is in safe hands!</h4>
      <div className="pl-20 pt-6 flex space-x-4">
        <button className=" border-2 w-40 h-8 "><Link to="applynow">Apply Now</Link></button>
      
        <Link to="emicalculator"><button className='border-2 w-52 h-8'>EMI Calculator</button></Link>
      </div>
      {/* <HashLink><h1 to="/fdeligible#documentsrequired">hhih</h1></HashLink> */}
    </div>
    </div>
    </div>
    </div>
    <Requirements />
    <Footer />
    </>


  );
}

export default Fd;
