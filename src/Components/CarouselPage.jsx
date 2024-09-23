import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselPage = () => {
  return (
    <div className=""> {/* Add margin-top to ensure the carousel appears below the fixed navbar */}
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div className="object-cover h-96">
            <img
              className="d-block w-full h-full object-cover"
              src="https://img.freepik.com/free-photo/house-investments-elements-assortment_23-2148793805.jpg?ga=GA1.1.213537375.1722233910&semt=ais_hybrid"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <div className="text-start">
              <h1 className="text-2xl text-white font-bold">Mann hai</h1>
              <h1 className="text-2xl text-white font-bold py-2">toh money hai</h1>
              <p className="w-96 text-white">We help you take control of your finances with our full-suite of personalized financial products</p>
              <div className="pt-4">
                <button className="border border-black w-36 h-10 text-white hover:bg-gray-500">Download App</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="object-cover h-96">
            <img
              className="d-block w-full h-full object-cover"
              src="Trip.jpg"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <div className="text-start">
              <h1 className="text-2xl text-white font-bold">Make Your Trip</h1>
              <p className="w-96 text-white py-4">
                Plan your next adventure with ease and excitement. Let us handle the details while you enjoy the journey!
              </p>
              <div className="pt-4">
                <button className="border border-black w-36 h-10 text-white hover:bg-gray-500">Download App</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="object-cover h-96">
            <img
              className="d-block w-full h-full object-cover"
              src="home.jpg"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <div className="text-start">
              <h1 className="text-2xl text-white font-bold">Build Your Dream Home</h1>
              <p className="w-96 text-white py-4">
                Bring your dream home to life with our expert guidance and seamless solutions. We make your vision a reality, from foundation to finish!
              </p>
              <div className="pt-4">
                <button className="border border-black w-36 h-10 text-white hover:bg-gray-500">Download App</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="object-cover h-96">
            <img
              className="d-block w-full h-full object-cover"
              src="Study-5.jpg"
              alt="Fourth slide"
            />
          </div>
          <Carousel.Caption>
            <div className="text-start">
              <h1 className="text-2xl text-black font-bold">Build Your Career</h1>
              <p className="w-96 text-black py-4">
                Build your career with the right financial support through our tailored loan solutions. Invest in your future today and achieve your professional goals!
              </p>
              <div className="pt-4">
                <button className="border border-black w-36 h-10 text-white hover:bg-gray-500">Download App</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="object-cover h-96">
            <img
              className="d-block w-full h-full object-cover"
              src="car-3.jpg"
              alt="Fifth slide"
            />
          </div>
          <Carousel.Caption>
            <div className="text-start">
              <h1 className="text-2xl text-lime-500 font-bold">Buy Your Dream Vehicle</h1>
              <p className="w-96 text-white py-4">
                Unlock the doors to your dream vehicle with our hassle-free loan options. Drive away with flexible EMI plans tailored just for you!
              </p>
              <div className="pt-4">
                <button className="border border-black w-36 h-10 text-white hover:bg-gray-500">Download App</button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
