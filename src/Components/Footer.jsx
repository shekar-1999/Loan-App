// Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Contact Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>1234 Street Name, City, State, 12345</p>
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center md:justify-start">
            <a href="https://facebook.com" className="text-white mx-2">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" className="text-white mx-2">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" className="text-white mx-2">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" className="text-white mx-2">
              <FaLinkedinIn size={20} />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="list-none space-y-1">
              <li>
                <a href="/about" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="/services" className="hover:underline">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
