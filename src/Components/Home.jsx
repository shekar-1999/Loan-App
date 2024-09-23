import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hearder from './Hearder';
import CarouselPage from './CarouselPage';
import OurServices from './OurServices';
import Creditcard from './Creditcard';
import Rating from './Rating';
//import GoogleRatingCard from "./Components/GoogleRatingCards";
import GoogleRatingCards from './GoogleRatingCards';
import FAQPage from './FAQPage';
import Footer from './Footer';
import YouTubeVideo from './YouTubeVideo';
import EMICalculator from './EMICalculator';
import HomeLoan from './HomeLoan';
import HomeApplicationForm from './HomeApplicationForm';
import QuestionnaireForm from './QuestionnaireForm';
import PersonalLoan from './PersonalLoan';
import DocumentsUpload from './DocumentsUpload';
import CreditScoreTracker from './CreditScoreTracker';
import Creditcard2 from './Creditcard2';
import Fd from './Fd';
import GoldLoan from './GoldLoan';
import VehicleInsurance from './VehicleInsurance';
import EducationLoan from './EducationLoan';
import BusinessLoan from './BusinessLoan';
import MortagageLoan from './MortagageLoan';
import Requirements from './Requirements';
import CantactUs from './CantactUs';


const Home = () => {
  return (
    <>
    {/* Render the fixed header */}
    <Hearder />
    
    {/* Render the carousel with margin to avoid overlapping with the fixed header */}
    <div className="mt-24"> {/* Adjust the margin-top if needed */}
      <CarouselPage />
    </div>
    <OurServices />
    <Creditcard />
    <Rating />
  
    <GoogleRatingCards />
    <FAQPage />
    <YouTubeVideo />
    <Footer />
     <EMICalculator /> 
    <HomeLoan />
    <HomeApplicationForm />
    <QuestionnaireForm />
    <PersonalLoan />
    <DocumentsUpload />
    <CreditScoreTracker />
    <Creditcard2 />
    <Fd />
    <VehicleInsurance />
    <GoldLoan />
    <EducationLoan />
    <BusinessLoan />
    <MortagageLoan />
    <Requirements /> 
    <CantactUs />
    
  </>
  );
}

export default Home;
