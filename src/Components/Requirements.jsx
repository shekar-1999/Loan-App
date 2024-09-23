import React from 'react';
//import { Link } from 'react-router-dom';


const Requirements = () => {
    const data = [
        { fee: 'Interest Rate', amount: 'Starting from 10% per annum' },
        { fee: 'Loan Processing Charges', amount: 'Starts at 2% of the approved loan amount' },
        { fee: 'Penal charges on Overdue EMI', amount: '24% per annum plus applicable taxes, if any' },
        { fee: 'NACH Bounce', amount: 'Rs.500/- each time' },
        { fee: 'Loan Cancellation', amount: 'If a borrower wishes to exit the loan after it has been sanctioned, he/she can do so within 3 days of loan disbursement.The principal amount and other applicable charges will have to be paid.' },
      ];
    
      const data2 = [
        // Each row is an object with two columns of dynamic content
        { col1: 'Age', col2: '21 - 57' },
        { col1: 'Minimum Credit Score', col2:<ul className="text-start list-disc"><li>CIBIL Score - 650</li><li>Experian Score - 650'</li></ul> },
        { col1: 'Documents', col2:<ul className="text-start list-disc"><li>Your PAN number</li><li>Your mobile number will have to be linked to your Aadhaar card for KYC verification</li><li>Clear selfie taken in a well-lit area</li></ul> },
        { col1: 'Employment', col2: 'Salaried/Self-employed' },
        { col1: 'Monthly Income    (minimum)', col2:<ul className="text-start list-disc"><li>Salaried - Rs. 13,500 </li><li>Self-employed - Rs. 15,000</li></ul> },
        { col1: 'Method of Salary Payment', col2: 'Must be credited directly to the applicant’s bank account' },
      ];
    
      const data3 = [
        { proof: 'Interest Rate', address: 'Starting from 10% per annum',incom:'' },
        {  proof: 'Loan Processing Charges', address: 'Starts at 2% of the approved loan amount',incom:'' },
        {  proof: 'Penal charges on Overdue EMI', address: '24% per annum plus applicable taxes, if any',incom:'' },
        { proof: 'NACH Bounce',address: 'Rs.500/- each time',incom:'' },
        {  proof: 'Loan Cancellation',address: 'If a borrower wishes to exit the loan after it has been sanctioned, he/she can do so within 3 days of loan disbursement.The principal amount and other applicable charges will have to be paid.',incom:'' },
      ];
  return (
    <>
    <section> 
    <div className="  min-h-screen bg-gray-100 p-10">
      
    <h1 className="text-2xl py-6">Interest Rates</h1>
  <table className="w-2/3 bg-white rounded-lg shadow-lg overflow-hidden ">
  
    <thead className="bg-blue-100 text-white">
      <tr>
        <th className="py-3 px-6 text-left w-60 border-r border-gray-300">Fees and Charges</th>
        <th className="py-3 px-6 text-left">Amount Chargeable</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index} className="border-b border-gray-200">
          <td className="py-3 px-6 text-gray-700 border-r border-gray-300">{item.fee}</td>
          <td className="py-3 px-6 text-gray-700">{item.amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</section>

<section id="heligibility">
<div className=" p-10 min-h-screen bg-gray-100">
  <h1 className="text-2xl py-6">Eligibility criteria</h1>
  <table className="w-2/3 bg-white rounded-lg shadow-lg overflow-hidden">
    {/* <thead className="bg-blue-500 text-white">
      <tr>
        <th className="py-3 px-6 text-left">Fees and Charges</th>
        <th className="py-3 px-6 text-left">Amount Chargeable</th>
      </tr>
    </thead> */}
    <tbody>
      {data2.map((row, index) => (
        <tr key={index} className="border-b border-gray-200">
          <td className="py-3 px-6 text-gray-700 border-r border-gray-300">{row.col1}</td> {/* Dynamic content for the first column */}
          <td className="py-3 px-6 text-gray-700">{row.col2}</td> {/* Dynamic content for the second column */}
        </tr>
      ))}
    </tbody>
  </table>
</div>
</section>

<secton id="hdocumentsrequired" >
<div className="flex  min-h-screen bg-gray-100 p-10">
  <table className="w-3/4 bg-white rounded-lg shadow-lg overflow-hidden">
    <thead className="bg-blue-100 text-white">
      <tr >
        <th className="py-3 px-6 text-left">Proof of Identity</th>
        <th className="py-3 px-6 text-left">Proof of Address</th>
        <th className="py-3 px-6 text-left">Proof of Income</th>
      </tr>
    </thead>
    <tbody className=' '>
      <tr>
        <td className="py-3 px-6 text-gray-700  border-r border-gray-300 w-72">
        <p><span className="font-bold">PAN Card</span> - This is the primary ID proof required. However, if it is rejected due to image quality issues or other reasons, any 1 of the officially valid documents given below will suffice</p>
       <ul className='list-disc p-4'>
        <li>Aadhaar Card</li>
        <li>Valid Indian Passport</li>
        <li>Valid Voter ID</li>
        <li>Valid Driver’s License</li>
       </ul>
        </td>
        <td className="py-3 px-6 text-gray-700 border-r border-gray-300 w-72">
          <p className="first-letter:font-bold">Any 1 of the following - </p>
          <ul className="list-disc p-4">
            <li>Aadhaar Card</li>
            <li>Valid Indian Passport</li>
            <li>Valid Voter ID</li>
            <li>Valid Driver’s License</li>
            <li>Utility Bills (Electricity, Water, Gas) dated within the last 60 days</li>
            
          </ul>
        </td>
        <td className="py-3 px-6 text-gray-700">
         <p>Salaried Applicants - Last 3 months’ bank statements of your salary account in PDF format showing salary credits</p>
         <p className='font-bold py-10'>OR</p>
         <p>Self-Employed Applicants - Last 3 months’ bank statements in PDF format</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</secton>
</>
  );
}

export default Requirements;
