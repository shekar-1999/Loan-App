import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Creditcard2 = () => {
  return (
    <>
    <div className="  ">
    <div className="bg-[url('https://img.freepik.com/free-vector/credit-card-digital-concept-background_1017-36143.jpg?ga=GA1.1.1408907841.1721685451&semt=ais_hybrid')] bg-cover bg-center h-3/4">
    <div className='flex justify-between '>
    <div className="flex flex-col  text-start  w-[50%] pt-40 text-white pb-20 pl-6">
      <h1 className="text-4xl" >"Unlock Endless Possibilities with Our Premium Credit Card!"</h1>
      <p className="pl-20 pt-6 ">Get exclusive rewards, cashback on every purchase, and enjoy zero annual fees for the first year.</p>
      <h4 className="text-xl pl-20">Your future, your card – elevate your life today!</h4>
      <div className="pl-20 pt-6 flex space-x-4">
        <button className=" border-2 w-40 h-8 "><Link to="applynow">Apply Now</Link></button>
      
        {/* <Link to="emicalculator"><button className='border-2 w-52 h-8'>EMI Calculator</button></Link> */}
      </div>
    </div>
    </div>
    </div>
    </div>


<div className="items-center justify-center ">
<div className="p-8 flex items-center justify-between">
  <div className="w-[380px] shadow-lg h-[580px] bg-white flex items-center justify-center">
    <img
      src="https://tse4.mm.bing.net/th?id=OIP.r_e2K8afYwI9PX_SP_7q7QAAAA&pid=Api&P=0&h=180"
      alt=""
      className="rotate-animation items-center justify-center"
    />
  </div>
  <div className="w-2/3 h-auto">
    <h1 className="text-2xl font-bold pb-2">Credit Card</h1>
    <h3 className="font-bold pb-1">Unlock the Power of Financial Freedom with Our Credit Card!</h3>
    <p>
      Discover the benefits of our premium credit card designed to meet all your financial needs. Whether you're shopping, dining, or traveling, enjoy a world of rewards, exclusive discounts, and seamless convenience at your fingertips.
    </p>
    <h3 className="text-xl font-bold py-4">Key Benefits:</h3>
    <ul>
      <li>Welcome Bonus: Get up to ₹5,000 cashback on your first transaction.</li>
      <li>Reward Points: Earn 5X reward points on all online purchases, fuel, and travel expenses.</li>
      <li>Annual Fee Waiver: Spend ₹50,000 annually and get the next year’s fee waived.</li>
      <li>0% EMI Options: Shop your favorite brands with easy 0% EMI for up to 12 months.</li>
      <li>Travel Benefits: Complimentary airport lounge access and exclusive discounts on hotel bookings.</li>
      <li>Security Features: Enjoy advanced fraud protection with instant card lock/unlock options via the app.</li>
    </ul>
    <h1 className="text-xl font-bold py-4">Special Offer:</h1>
    <ul>
      <li>Limited Time: Apply today and get a lifetime free card with no annual fees!</li>
      <li>Exclusive Deals: Up to 10% off on your favorite e-commerce sites and restaurants.</li>
    </ul>
    <p>Apply now and experience a new level of financial flexibility!</p>
  </div>
</div>
</div>
<Footer />
</>
    

    
  );
}

export default Creditcard2;
