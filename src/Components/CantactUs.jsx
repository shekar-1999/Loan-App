import React from 'react';
import Footer from './Footer';

const CantactUs = () => {
  return (
    <div>
        <div className="flex-col items-center justify-center ml-40 pt-16 pb-6">
            <div className=" w-3/4">
                <h1 className="text-3xl font-bold">Get in touch with us</h1>
                <p className="py-2 text-gray-600">Please write to us at care@moneyview.in for any service-related queries or feedback. Alternatively, you may also use the InstantCashflow  App to lodge a complaint or report an issue. We generally respond within 24-48 working hours.</p>
                <p className="text-xl font-bold">Timings: Monday to Saturday - 9 am to 6 pm - Excluding public holidays</p>
            </div>
            <div className="flex pt-14 space-x-10 pl-2 ">
                <div className="flex space-x-2 items-center justify-center ">
                <img src="https://moneyview.in/images/customer-care-no.png" alt="" className="w-10 h-10" />
                <div>
                <h1>Contact Number</h1>
                <p className="pr-10">9759279700</p>
                </div>
                </div>
               
                <div className="flex items-center justify-center space-x-2">
                <img src="https://moneyview.in/images/blog/wp-content/uploads/2019/03/ic-dsa-inquiry-40%402x.png" alt="" className="w-10 h-10" />
                <div >
                <h1>Customer Support</h1>
                <p>inastantcashflow@gmail.com</p>
                </div>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/character-illustration-people-with-internet-message-icons_53876-43082.jpg?ga=GA1.2.1408907841.1721685451&semt=ais_hybrid" alt=""  className="w-96 h-72"/>
                </div>
            </div>

        </div>
        <Footer />
      
    </div>
  );
}

export default CantactUs;
