import React, { useState, useEffect, useRef } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { RiArrowDropDownLine } from 'react-icons/ri'; // Import dropdown icon

const Navbar = () => {
  let Links = [
    { name: 'Personal Loan', link: '/' },
    { name: 'Credit Tracker', link: '/' },
    { name: 'More', link: '#', dropdown: true }, // Dropdown for "More"
    { name: 'Calculator', link: '#', dropdown: true }, // Dropdown for "Calculator"
    { name: 'Contact Us', link: '/' },
  ];

  let [open, setOpen] = useState(false);
  const [dropdownMoreOpen, setDropdownMoreOpen] = useState(false); // State for 'More' dropdown
  const [dropdownCalcOpen, setDropdownCalcOpen] = useState(false); // State for 'Calculator' dropdown

  // Refs for dropdowns
  const moreDropdownRef = useRef(null);
  const calcDropdownRef = useRef(null);

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
    <div className="shadow-md w-full fixed top-0 left-0 z-50 bg-white"> {/* Navbar is now fixed and has a high z-index */}
      <div className="md:flex items-center justify-between py-2 md:px-10 px-4">
        <img src="logo.jpeg" alt="logo" className="w-48 py-2 ml-40" />

        {/* Menu icon for mobile */}
        <div onClick={() => setOpen(!open)} className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7">
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* Navigation links */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in pr-40 ${
            open ? 'top-12' : 'top-[-490px]'
          }`}
        >
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
                    onClick={() => setDropdownMoreOpen(!dropdownMoreOpen)} // Toggle dropdown on click
                  >
                    {link.name}
                    <RiArrowDropDownLine
                      className={`ml-1 text-2xl transition-transform duration-300 ${
                        dropdownMoreOpen ? 'rotate-180' : ''
                      }`} // Rotate when open
                    />
                  </button>
                  {dropdownMoreOpen && (
                    <ul className="absolute left-0 mt-2 py-2 bg-white shadow-lg rounded-lg w-52">
                      <li className="px-4 py-2 hover:bg-gray-100 text-sm">
                        <a href="/more-option-1 " className="font-normal">Credit Card</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 text-sm">
                        <a href="/more-option-2 "  className="font-normal">Home Loan</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 text-sm">
                        <a href="/more-option-3"  className="font-normal">Loan Against Property</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 text-sm">
                        <a href="/more-option-3"  className="font-normal">FD Select</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 text-sm">
                        <a href="/more-option-3"  className="font-normal">Motor Insurance</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 text-sm">
                        <a href="/more-option-3"  className="font-normal">Moneyview Gold</a>
                      </li>
                    </ul>
                  )}
                </div>
              ) : link.name === 'Calculator' ? (
                <div className="relative inline-block" ref={calcDropdownRef}>
                  <button
                    className="flex items-center text-gray-800 hover:text-blue-400 duration-500"
                    onClick={() => setDropdownCalcOpen(!dropdownCalcOpen)} // Toggle dropdown on click
                  >
                    {link.name}
                    <RiArrowDropDownLine
                      className={`ml-1 text-2xl transition-transform duration-300 ${
                        dropdownCalcOpen ? 'rotate-180' : ''
                      }`} // Rotate when open
                    />
                  </button>
                  {dropdownCalcOpen && (
                    <ul className="absolute left-0 mt-2 py-2 bg-white shadow-lg rounded-lg w-40">
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="/calc-option-1" className="text-sm font-normal">Personal Loan</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="/calc-option-2" className="text-sm font-normal">Education Loan</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="/calc-option-3" className="text-sm font-normal">Bike Loan</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="/calc-option-3" className="text-sm font-normal">Car Loan</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="/calc-option-3" className="text-sm font-normal">Businees Loan</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="/calc-option-3" className="text-sm font-normal">Home Loan</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="/calc-option-3" className="text-sm font-normal">Mortagage Loan</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="/calc-option-3" className="text-sm font-normal">Gold Loan</a>
                      </li>
                    </ul>
                  )}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
