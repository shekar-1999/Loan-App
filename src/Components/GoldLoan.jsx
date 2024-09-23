import React from 'react';
import { Link } from 'react-router-dom';
import Requirements from './Requirements';
import Footer from './Footer';

const GoldLoan = () => {
  return (
    <>
    <div className="  ">
    <div className="bg-[url('https://img.freepik.com/premium-photo/akshaya-tritiya-gold-coins-diwali-background_1279582-10453.jpg?ga=GA1.1.1408907841.1721685451&semt=ais_hybrid')] bg-cover bg-center h-3/4">
    <div className='flex justify-between '>
    <div className="flex flex-col  text-start  w-[50%] pt-40 text-white pb-20 pl-6">
      <h1 className="text-4xl" >"Turn Your Gold into Instant Cash with Our Gold Loan!"</h1>
      <p className="pl-20 pt-6 ">Low-interest rates, quick approvals, and flexible repayment options – unlock the value of your gold today.</p>
      <h4 className="text-xl pl-20"> Your gold, your power – secure your dreams effortlessly!</h4>
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

export default GoldLoan;
