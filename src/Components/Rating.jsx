import React from 'react';

const Rating = () => {
  return (
    <div className="relative"> {/* Set the parent as relative */}
      <div>
        <div className="relative"> {/* Set the inner div as relative */}
          <h1 className="absolute mt-[90px] ml-[170px] top-0 left-0 text-black text-4xl font-bold">
            The most loved financial app
          </h1>
          <img
            src="https://moneyview.in/images/customer-review-section-desktop-v3.webp"
            alt=""
            className="p-8 w-[900px] h-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Rating;
