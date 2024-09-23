import React from 'react';
import { Link } from 'react-router-dom';
import Requirements from './Requirements';
import Footer from './Footer'
import { HashLink } from 'react-router-hash-link';

const HomeLoan = () => {
  return (
    <>
    <div className="  ">
        <div className="bg-[url('https://img.freepik.com/free-photo/model-house-with-coins-wooden-table_1150-12785.jpg?t=st=1726852414~exp=1726856014~hmac=6836bd83eb0d4c220ae0ce04113de761cc3e98f9bcad65a527be25771bbcf1e9&w=900')] bg-cover bg-center h-3/4 pb-10">
        <div className='flex justify-between '>
        <div className="flex flex-col  text-start  w-[50%] pt-20">
          <h1 className="text-4xl" >"🏡 Your Dream Home Awaits! 🏡</h1>
          <p className="pl-20 pt-6 ">Turn your homeownership dreams into reality with our affordable home loans. Get flexible EMI options, competitive interest rates, and expert support every step of the way</p>
          <h4 className="text-xl pl-20">your dream home a reality! ✨"</h4>
          <div className="pl-20 pt-6 flex space-x-4">
            <button className=" border-2 w-40 h-8 "><Link to="applynow">Apply Now</Link></button>
          
            <Link to="emicalculator"><button className='border-2 w-52 h-8'>EMI Calculator</button></Link>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center pr-6">
            <ul className="flex items-center justify-between space-x-6">
              <HashLink to="#hinterestrates"><li><a>Interest rates</a></li></HashLink>
              <HashLink to="#heligibility"><li><a>Eligibility criteria</a></li></HashLink>
              <HashLink to="#hdocumentsrequired"><li><a>Documents required</a></li></HashLink>
              {/* <li><a>How to apply</a></li> */}
             
            </ul>
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

export default HomeLoan;
