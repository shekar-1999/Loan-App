import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QuestionnaireForm = () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4:'',
    question5:'',
  });
  const [consent, setConsent] = useState(false);

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setConsent(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consent) {
      alert('You must consent to proceed.');
      return;
    }
    console.log('Submitted Answers: ', answers);
    // Handle form submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-10">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Loan Application Questions</h2>

        {/* Question 1 */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">1. What is your employment status?</label>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="question1"
                value="Employed"
                checked={answers.question1 === 'Employed'}
                onChange={handleChange}
                className="mr-2"
                required
              />
              Employed
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="question1"
                value="Self-Employed"
                checked={answers.question1 === 'Self-Employed'}
                onChange={handleChange}
                className="mr-2"
              />
              Self-Employed
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="question1"
                value="Unemployed"
                checked={answers.question1 === 'Unemployed'}
                onChange={handleChange}
                className="mr-2"
              />
              Unemployed
            </label>
          </div>
        </div>

        {/* Question 2 */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">2. What is your monthly income?</label>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="question2"
                value="Less than 20000"
                checked={answers.question2 === 'Less than 20000'}
                onChange={handleChange}
                className="mr-2"
                required
              />
              Less than 20000
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="question2"
                value="20000-50000"
                checked={answers.question2 === '20000-50000'}
                onChange={handleChange}
                className="mr-2"
              />
             Between 20000-50000
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="question2"
                value="More than 50000"
                checked={answers.question2 === 'More than 50000'}
                onChange={handleChange}
                className="mr-2"
              />
              More than 50000
            </label>
          </div>
        </div>

        {/* Question 3 */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">3. What is your credit score?</label>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="question3"
                value="Below 600"
                checked={answers.question3 === 'Below 600'}
                onChange={handleChange}
                className="mr-2"
                required
              />
              Below 600
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="question3"
                value="600-700"
                checked={answers.question3 === '600-700'}
                onChange={handleChange}
                className="mr-2"
              />
              600-700
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="question3"
                value="Above 700"
                checked={answers.question3 === 'Above 700'}
                onChange={handleChange}
                className="mr-2"
              />
              Above 700
            </label>
          </div>
        </div>

        
        {/* Question 4 */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">4. By when are you looking to take the loan?</label>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="question4"
                value="  Within a montha"
                checked={answers.question4 === '  Within a montha'}
                onChange={handleChange}
                className="mr-2"
                required
              />
              Within a montha
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="question4"
                value=" Within 2 months"
                checked={answers.question4 === ' Within 2 months'}
                onChange={handleChange}
                className="mr-2"
              />
             Within 2 months
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="question4"
                value=" After 2 months"
                checked={answers.question4 === ' After 2 months'}
                onChange={handleChange}
                className="mr-2"
              />
             After 2 months
            </label>
          </div>
        </div>

        
        {/* Question 5 */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">5. What is the purpose of your home loan?</label>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="question5"
                value="Home construction"
                checked={answers.question5 === 'Home construction'}
                onChange={handleChange}
                className="mr-2"
                required
              />
             Home construction
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="question5"
                value="Home buy"
                checked={answers.question5 === 'Home buy'}
                onChange={handleChange}
                className="mr-2"
              />
              Home buy
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="question5"
                value="Plot purchase"
                checked={answers.question5 === 'Plot purchase'}
                onChange={handleChange}
                className="mr-2"
              />
             Plot purchase
            </label>
          </div>
        </div>

         
        {/* Question 6 */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">6. Is there any existing loan on this property?</label>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="question6"
                value="Yes"
                checked={answers.question6 === 'Yes'}
                onChange={handleChange}
                className="mr-2"
                required
              />
                 Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="question6"
                value="No"
                checked={answers.question6 === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
                No
            </label>
          </div>
        </div>



        {/* Consent Checkbox */}
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={consent}
              onChange={handleCheckboxChange}
              className="mr-2"
              required
            />
            I consent to providing the property paper for loan process.
          </label>
        </div>

        {/* Submit Button */}
        <Link to="documents"><button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button></Link>
      </form>
    </div>
  );
};

export default QuestionnaireForm;
