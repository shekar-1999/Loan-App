import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { RiArrowDropDownLine } from 'react-icons/ri'; // Import dropdown icon

const Hearder = () => {
  let Links = [
    { name: 'Personal Loan', link: 'personalloan' },
    { name: 'Credit Tracker', link: 'creditscoretracker' },
    { name: 'More', link: '#', dropdown: true }, // Dropdown for "More"
    { name: 'Calculator', link: '#', dropdown: true }, // Dropdown for "Calculator"
    { name: 'Contact Us', link: 'cantactus' },
  ];

  let [open, setOpen] = useState(false);
  const [dropdownMoreOpen, setDropdownMoreOpen] = useState(false); // State for 'More' dropdown
  const [dropdownCalcOpen, setDropdownCalcOpen] = useState(false); // State for 'Calculator' dropdown
  const [profile, setProfile] = useState(null); // Profile state for user data

  // Refs for dropdowns
  const moreDropdownRef = useRef(null);
  const calcDropdownRef = useRef(null);

  // Fetch profile data from localStorage when component mounts
  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('loggedInUser')); // Fetch logged-in user
    if (storedProfile) {
      setProfile(storedProfile); // Set profile state with user data
    }
  }, []);

  // Handle profile photo change
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedProfile = { ...profile, profilePhoto: reader.result }; // Update profile with new photo
        setProfile(updatedProfile);
        localStorage.setItem('loggedInUser', JSON.stringify(updatedProfile)); // Save updated profile in local storage
      };
      reader.readAsDataURL(file);
    }
  };

  // Effect to handle click outside for dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setDropdownMoreOpen(false);
      }
      if (calcDropdownRef.current && !calcDropdownRef.current.contains(event.target)) {
        setDropdownCalcOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex-col '>
      {/* First bar */}
      <div className="shadow-2xl w-full fixed top-0 left-0 z-50 bg-blue-500"> 
        <div className="md:flex items-center justify-between py-2 md:px-10 px-4">
          <div className="flex items-center space-x-8">
            <div className="flex items-center pl-6">
              <FaPhoneAlt />
              <h1>143-423687</h1>
            </div>
            <div>|</div>
            <div className="flex items-center">
              <CiMail />
              <h1>instantcashflow@gmail.com</h1>
            </div>
          </div>
          <div className="flex items-center space-x-8 pr-6">
            <Link to="register"><h1>Register</h1></Link>
            <h1>|</h1>
            <Link to="login"><h1>Login</h1></Link>
          </div>
        </div>
      </div>

      {/* Second bar */}
      <div className="shadow-md w-full fixed top-10 left-0 z-40 bg-white h-20 ">
        <div className="md:flex items-center justify-between py-1 md:px-10 px-4">
          <img src="logo_3.png" alt="logo" className="w-20 h-20 ml-10 pb-2" />

          {/* Centered Navigation */}
          <div className="absolute left-[550px] transform -translate-x-1/2 pl-10 ">
            <ul className="md:flex md:items-center ">
              {Links.map((link, index) => (
                <li key={index} className="md:ml-8 md:my-0 font-semibold relative">
                  {!link.dropdown ? (
                    <a href={link.link} className="text-gray-800 hover:text-blue-400 duration-500">
                      {link.name}
                    </a>
                  ) : link.name === 'More' ? (
                    <div className="relative inline-block" ref={moreDropdownRef}>
                      <button
                        className="flex items-center text-gray-800 hover:text-blue-400 duration-500"
                        onClick={() => setDropdownMoreOpen(!dropdownMoreOpen)}
                      >
                        {link.name}
                        <RiArrowDropDownLine
                          className={`ml-1 text-2xl transition-transform duration-300 ${
                            dropdownMoreOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {dropdownMoreOpen && (
                        <ul className="absolute left-0 mt-2 py-2 bg-white shadow-lg rounded-lg w-52">
                          <Link to="creditcar2"><li className="px-4 py-2 hover:bg-gray-100 text-sm">Credit Card</li></Link>
                          <Link to="homeloan"><li className="px-4 py-2 hover:bg-gray-100 text-sm">Home Loan</li></Link>
                          <li className="px-4 py-2 hover:bg-gray-100 text-sm">Loan Against Property</li>
                          <Link to="fd"><li className="px-4 py-2 hover:bg-gray-100 text-sm">FD Select</li></Link>
                          <Link to="vehicleinsurance"><li className="px-4 py-2 hover:bg-gray-100 text-sm">Motor Insurance</li></Link>
                          <li className="px-4 py-2 hover:bg-gray-100 text-sm">
                            <Link to="goldloan">InstantCashflow Gold</Link>
                          </li>
                        </ul>
                      )}
                    </div>
                  ) : link.name === 'Calculator' ? (
                    <div className="relative inline-block" ref={calcDropdownRef}>
                      <button
                        className="flex items-center text-gray-800 hover:text-blue-400 duration-500"
                        onClick={() => setDropdownCalcOpen(!dropdownCalcOpen)}
                      >
                        {link.name}
                        <RiArrowDropDownLine
                          className={`ml-1 text-2xl transition-transform duration-300 ${
                            dropdownCalcOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {dropdownCalcOpen && (
                        <ul className="absolute left-0 mt-2 py-2 bg-white shadow-lg rounded-lg w-40">
                          <Link to="emicalculator"><li className="px-4 py-2 hover:bg-gray-100">Personal Loan</li></Link>
                          <Link to="emicalculator"><li className="px-4 py-2 hover:bg-gray-100">Education Loan</li></Link>
                          <Link to="emicalculator"><li className="px-4 py-2 hover:bg-gray-100">Bike Loan</li></Link>
                          <Link to="emicalculator"><li className="px-4 py-2 hover:bg-gray-100">Car Loan</li></Link>
                          <Link to="emicalculator"><li className="px-4 py-2 hover:bg-gray-100">Business Loan</li></Link>
                          <Link to="emicalculator"><li className="px-4 py-2 hover:bg-gray-100">Home Loan</li></Link>
                          <Link to="emicalculator"><li className="px-4 py-2 hover:bg-gray-100">Mortgage Loan</li></Link>
                          <Link to="emicalculator"><li className="px-4 py-2 hover:bg-gray-100">Gold Loan</li></Link>
                        </ul>
                      )}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          {/*  Profile Section */}
          {profile && (
            <div className="ml-auto flex items-center space-x-4">
              <img
                src={profile.profilePhoto || 'default-profile.png'}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h1 className="font-semibold">{profile.name}</h1>
                <p className="text-sm text-gray-600">{profile.email}</p>
              </div>
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
                <span className="text-blue-400 hover:underline text-sm">Change Photo</span>
              </label>
            </div>
          )}  
        </div> 
      </div>
    </div>
  );
};

export default Hearder;
