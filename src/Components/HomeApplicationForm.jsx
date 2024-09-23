import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    loanAmount: '',
    income: '',
    pancard: ''
  });

  const [errors, setErrors] = useState({ pancard: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'pancard') {
      // PAN card validation pattern
      const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      if (!panPattern.test(value)) {
        setErrors({ ...errors, pancard: 'Invalid PAN card format' });
      } else {
        setErrors({ ...errors, pancard: '' });
      }
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.pancard) {
      // Handle form submission logic here
      console.log(formData);
    } else {
      console.log('Please correct the errors in the form');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-10">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md h-[50%]">
        <h2 className="text-2xl font-semibold text-center mb-4">Home Application Form</h2>
        
        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Loan Amount */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="loanAmount">Loan Amount</label>
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Income */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="income">Income</label>
          <input
            type="number"
            id="income"
            name="income"
            value={formData.income}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* PAN Card */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="pancard">PAN Card</label>
          <input
            type="text"
            id="pancard"
            name="pancard"
            value={formData.pancard}
            onChange={handleChange}
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.pancard ? 'border-red-500' : ''}`}
            placeholder="AAAAA9999A"
            required
          />
          {errors.pancard && <p className="text-red-500 text-sm mt-1">{errors.pancard}</p>}
        </div>

        <Link to="questions">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit Application
          </button>
        </Link>
      </form>
    </div>
  );
};

export default HomeApplicationForm;
