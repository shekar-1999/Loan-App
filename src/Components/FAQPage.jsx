// FAQPage.js
import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const faqData = [
  {
    question: "What is InstantCashflow?",
    answer: "InstantCashflow is a digital platform providing accessible financial services to all. It leverages technology to provide customised personal loans to borrowers, enables users to track their credit behaviour, and provides a curated savings tool that offers high returns through pro-saver accounts."
  },
  {
    question: "Is InstantCashflow RBI approved?",
    answer: "InstantCashflow is a digital platform licensed by the Reserve Bank of India (RBI) that offers personal loans and other financial products. The loan application process is fully digital, and the app is 100% secure to use."
  },
  {
    question: "Is it safe to use the InstantCashflow app?",
    answer: "InstantCashflow is ISO 27001:2022 Certified for Information Security Management Systems and uses 256-bit data encryption for data management. The information a user provides is secured against data threats, making the InstantCashflow app one of the safest loan apps."
  },
  {
    question: "How does the InstantCashflow app work?",
    answer: "The InstantCashflow Loans app is simple and easy to use. Download the app from the Google Play Store and log in using your mobile number. Once logged in, you can access a host of personal finance products."
  },
  {
    question: "What are the products offered on the InstantCashflow platform?",
    answer: "InstantCashflow is a digital platform that offers the following services."
  },
  {
    question: "Is InstantCashflow a fintech or NBFC?",
    answer: "InstantCashflow is a digital platform amongst a few Indian Fintech companies that partner with banks and NBFCs that comply with RBI lending policies and are ISO 27001:2022 Certified for Information Security Management Systems."
  },
  {
    question: "How Do I contact InstantCashflow if I face any issues with the InstantCashflow app & website?",
    answer: "For any service-related queries or feedback, please contact our customer support at care@InstantCashflow.in or 080 6939 0476. Our support is available Monday to Saturday, from 9 AM to 6 PM, except on public holidays.  Customers wanting to file a complaint or report an issue can do so through the InstantCashflow app. You will receive a response within 24 - 48 working hours."
  }
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-md overflow-hidden">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 focus:outline-none flex items-center justify-between"
            >
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <FaAngleDown
                className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
            >
              <p className="px-4 py-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
