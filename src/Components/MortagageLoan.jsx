import React from 'react';
import { Link } from 'react-router-dom';
import Requirements from './Requirements';
import Footer from './Footer';

const MortagageLoan = () => {
  return (
    <>
    <div className="  ">
    <div className="bg-[url('https://img.freepik.com/premium-photo/chart-graph-investment-finance-business-currency-datum-economy-stock-growth-diagram-marke_1064589-296961.jpg?ga=GA1.2.1408907841.1721685451&semt=ais_hybrid')] bg-cover bg-center h-3/4">
    <div className='flex justify-between '>
    <div className="flex flex-col  text-start  w-[50%] pt-40 text-white pb-20 pl-6">
      <h1 className="text-4xl" >"Make your dream home a reality with easy mortgage solutions!"</h1>
      <p className="pl-20 pt-6 ">"Step into your new home with confidence. Our mortgage loans offer low rates, flexible terms, and a smooth approval process. Your future starts here!"</p>
      <h4 className="text-xl pl-20">"Your dream home is closer than you think!"</h4>
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

export default MortagageLoan;
