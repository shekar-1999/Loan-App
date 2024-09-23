import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const OurServices = () => {
  return (
    <div className="bg-white h-auto pb-10 justify-center items-center">
      {/* Adjust top padding to account for the navbar height */}
      <div className="p-8">
        <h1 className="text-lg">Our Services</h1>

        {/* Container for the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center pt-6">
          {/* First Card */}
          <div className="bg-white shadow-md rounded-lg w-96 h-72 border-2 relative">
            <div className="p-6">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-4">
                  Personal <br /> Loan
                </h2>
                <img
                  src="https://moneyview.in/images/plProductCardRsIcon.webp"
                  alt=""
                  className="w-16 h-16"
                />
              </div>
              <p>Get up to</p>
              <div className="flex justify-between">
                <p className="font-bold underline underline-offset-4">
                  ₹10L in 10 mins
                </p>
                <Link to="personalloan"><FaArrowRight className="text-green-300" /></Link>
              </div>
            </div>

            {/* Teal section at the bottom */}
            <div className="absolute bottom-0 w-full">
              <div className="bg-teal-100 h-20 pl-8 pt-2">
                <p className="font-normal py-2 text-gray-600">Zero paperwork</p>
                <p className="font-normal text-gray-600">Affordable EMIs</p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white shadow-md rounded-lg w-96 h-72 border-2 relative">
            <div className="p-6">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-4">
                  Credit <br /> Tracker
                </h2>
                <img
                  src="https://moneyview.in/images/CT_ProductIconDesktop.webp"
                  alt=""
                  className="w-16 h-16"
                />
              </div>
              <p>Get a free credit report with</p>
              <div className="flex justify-between">
                <p className="font-bold underline underline-offset-4">
                  Personalized tips
                </p>
                <Link to="creditscoretracker"><FaArrowRight className="text-pink-300" /></Link>
              </div>
            </div>

            {/* Red section at the bottom */}
            <div className="absolute bottom-0 w-full">
              <div className="bg-red-100 h-20 pl-8 pt-2">
                <p className="font-normal py-2 text-gray-600">Detailed report</p>
                <p className="font-normal text-gray-600">
                  Insights for a better score
                </p>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-white shadow-md rounded-lg w-96 h-72 border-2 relative">
            <div className="p-6">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-4">
                  Home <br /> Loan
                </h2>
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.NgGMObL79e72JpuVQr-77gHaEK&pid=Api&P=0&h=180"
                  alt=""
                  className="w-28 h-16"
                />
              </div>
              <p>Get up to</p>
              <div className="flex justify-between">
                <p className="font-bold underline underline-offset-4">
                  ₹50L in 10 mins
                </p>
                <Link to="homeloan"><FaArrowRight /></Link>
              </div>
            </div>

            {/* Teal section at the bottom */}
            <div className="absolute bottom-0 w-full">
              <div className="bg-teal-100 h-20 pl-8 pt-2">
                <p className="font-normal py-2 text-gray-600">Zero paperwork</p>
                <p className="font-normal text-gray-600">Affordable EMIs</p>
              </div>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="bg-white shadow-md rounded-lg w-96 h-72 border-2 relative">
            <div className="p-6">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-4">
                  Education <br /> Loan
                </h2>
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.J0dZR9br87TwUhFUI7wmOgHaHa&pid=Api&P=0&h=180"
                  alt=""
                  className="w-16 h-16"
                />
              </div>
              <p>Get up to</p>
              <div className="flex justify-between">
                <p className="font-bold underline underline-offset-4">
                  ₹50L in 10 mins
                </p>
                <Link to="educationloan"><FaArrowRight /></Link>
              </div>
            </div>

            {/* Teal section at the bottom */}
            <div className="absolute bottom-0 w-full">
              <div className="bg-teal-100 h-20 pl-8 pt-2">
                <p className="font-normal py-2 text-gray-600">Zero paperwork</p>
                <p className="font-normal text-gray-600">Affordable EMIs</p>
              </div>
            </div>
          </div>

          {/* Fifth Card */}
          <div className="bg-white shadow-md rounded-lg w-96 h-72 border-2 relative">
            <div className="p-6">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-4">
                  Vehicle <br /> Loan
                </h2>
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.zNNnDjq_Prdq1pqHNpbCNAHaFC&pid=Api&P=0&h=180"
                  alt=""
                  className="w-16 h-16"
                />
              </div>
              <p>Get up to</p>
              <div className="flex justify-between">
                <p className="font-bold underline underline-offset-4">
                  ₹20L in 10 mins
                </p>
                <Link to="vehicleinsurance"><FaArrowRight /></Link>
              </div>
            </div>

            {/* Teal section at the bottom */}
            <div className="absolute bottom-0 w-full">
              <div className="bg-teal-100 h-20 pl-8 pt-2">
                <p className="font-normal py-2 text-gray-600">Zero paperwork</p>
                <p className="font-normal text-gray-600">Affordable EMIs</p>
              </div>
            </div>
          </div>

          {/* Sixth Card */}
          <div className="bg-white shadow-md rounded-lg w-96 h-72 border-2 relative">
            <div className="p-6">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-4">
                  Business <br /> Loan
                </h2>
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.5yk0TBW9v26Ide5Jqa0KQwAAAA&pid=Api&P=0&h=180"
                  alt=""
                  className="w-16 h-16"
                />
              </div>
              <p>Get up to</p>
              <div className="flex justify-between">
                <p className="font-bold underline underline-offset-4">
                  ₹80L in 10 mins
                </p>
                <Link to="businessloan"><FaArrowRight /></Link>
              </div>
            </div>

            {/* Teal section at the bottom */}
            <div className="absolute bottom-0 w-full">
              <div className="bg-teal-100 h-20 pl-8 pt-2">
                <p className="font-normal py-2 text-gray-600">Zero paperwork</p>
                <p className="font-normal text-gray-600">Affordable EMIs</p>
              </div>
            </div>
          </div>
 {/* Seventh Card */}
 <div className="bg-white shadow-md rounded-lg w-96 h-72 border-2 relative">
            <div className="p-6">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-4">
                  Mortagage <br /> Loan
                </h2>
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.s6GB8p7CZJrQ53Hz-ytQPwHaH0&pid=Api&P=0&h=180"
                  alt=""
                  className="w-16 h-16"
                />
              </div>
              <p>Get up to</p>
              <div className="flex justify-between">
                <p className="font-bold underline underline-offset-4">
                  ₹30L in 10 mins
                </p>
                <Link to="mortgageloan" ><FaArrowRight /></Link>
              </div>
            </div>

            {/* Teal section at the bottom */}
            <div className="absolute bottom-0 w-full">
              <div className="bg-teal-100 h-20 pl-8 pt-2">
                <p className="font-normal py-2 text-gray-600">Zero paperwork</p>
                <p className="font-normal text-gray-600">Affordable EMIs</p>
              </div>
            </div>
          </div>

          {/* Eight Card */}
         <div className="bg-white shadow-md rounded-lg w-96 h-72 border-2 relative">
            <div className="p-6">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-4">
                  Fixed deposit <br /> Loan
                </h2>
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.inIsG1eHZ_zHV1lXSVgLLwAAAA&pid=Api&P=0&h=180"
                  alt=""
                  className="w-16 h-16"
                />
              </div>
              <p>Get up to</p>
              <div className="flex justify-between">
                <p className="font-bold underline underline-offset-4">
                  10% instrest
                </p>
                <Link to="fd"><FaArrowRight /></Link>
              </div>
            </div>

            {/* Teal section at the bottom */}
            <div className="absolute bottom-0 w-full">
              <div className="bg-teal-100 h-20 pl-8 pt-2">
                <p className="font-normal py-2 text-gray-600">Zero paperwork</p>
                <p className="font-normal text-gray-600">Affordable EMIs</p>
              </div>
            </div>
          </div>

          {/* Ningth Card */}
          <div className="bg-white shadow-md rounded-lg w-96 h-72 border-2 relative">
            <div className="p-6">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-4">
                  Gold <br /> Loan
                </h2>
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.WW1-YWRR2c0rpXutfrQJ2wAAAA&pid=Api&P=0&h=180"
                  alt=""
                  className="w-16 h-16"
                />
              </div>
              <p>Get up to</p>
              <div className="flex justify-between">
                <p className="font-bold underline underline-offset-4">
                  ₹50L in 10 mins
                </p>
                <Link to="goldloan"><FaArrowRight /></Link>
              </div>
            </div>

            {/* Teal section at the bottom */}
            <div className="absolute bottom-0 w-full">
              <div className="bg-teal-100 h-20 pl-8 pt-2">
                <p className="font-normal py-2 text-gray-600">Zero paperwork</p>
                <p className="font-normal text-gray-600">Affordable EMIs</p>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default OurServices;
