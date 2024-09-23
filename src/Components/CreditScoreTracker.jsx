import React, { useState } from 'react';
import Footer from './Footer';

const CreditScoreTracker = () => {
  const [panNumber, setPanNumber] = useState('');
  const [creditScore, setCreditScore] = useState(null);
  const [error, setError] = useState('');

  // Function to validate PAN number format
  const isValidPan = (pan) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan);
  };

  // Function to simulate credit score fetching
  const fetchCreditScore = (pan) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockScore = Math.floor(Math.random() * (900 - 300 + 1)) + 300; // Generate a random score between 300 and 900
        resolve(mockScore);
      }, 1000);
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setCreditScore(null);

    if (!isValidPan(panNumber)) {
      setError('Invalid PAN Number. Please enter a valid PAN (e.g., ABCDE1234F).');
      return;
    }

    try {
      const score = await fetchCreditScore(panNumber);
      setCreditScore(score);
    } catch (err) {
      setError('Error fetching credit score. Please try again later.');
    }
  };

  return (
    <>
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/credit-score-meter-blackboard-indicating-fair-poor-range-financial-assessment-concept-3d-rendering_670147-72661.jpg?ga=GA1.1.1408907841.1721685451&semt=ais_hybrid')` }}  // Reference the image here
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full bg-opacity-90">
        <h1 className="text-2xl font-bold mb-6 text-center">CIBIL Score Tracker</h1>

        <form onSubmit={handleSubmit} className="mb-4">
          <label htmlFor="panNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Enter Your PAN Number
          </label>
          <input
            type="text"
            id="panNumber"
            value={panNumber}
            onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
            placeholder="ABCDE1234F"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength={10}
            required
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}

          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Get Credit Score
          </button>
        </form>

        {creditScore && (
          <div className="text-center mt-6">
            <h2 className="text-xl font-semibold">Your CIBIL Score</h2>
            <p className={`mt-4 text-4xl font-bold ${creditScore >= 750 ? 'text-green-500' : 'text-red-500'}`}>
              {creditScore}
            </p>
            <p className="mt-2">{creditScore >= 750 ? 'Good Score!' : 'Needs Improvement'}</p>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CreditScoreTracker;
