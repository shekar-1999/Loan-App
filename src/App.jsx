// import { useState } from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Hearder from './Components/Hearder';
// import CarouselPage from './Components/CarouselPage';
// import OurServices from './Components/OurServices';
// import Creditcard from './Components/Creditcard';
// import Rating from './Components/Rating';
// //import GoogleRatingCard from "./Components/GoogleRatingCards";
// import GoogleRatingCards from './Components/GoogleRatingCards';
// import FAQPage from './Components/FAQPage';
// import Footer from './Components/Footer';
// import YouTubeVideo from './Components/YouTubeVideo';
// import EMICalculator from './Components/EMICalculator';
import Home from './Components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import EMICalculator from './Components/EMICalculator';
import Register from './Components/Register';
import Login from './Components/Login';
import HomeLoan from './Components/HomeLoan';
import HomeApplicationForm from './Components/HomeApplicationForm';
import QuestionnaireForm from './Components/QuestionnaireForm';
import PersonalLoan from './Components/PersonalLoan';
import CreditScoreTracker from './Components/CreditScoreTracker';
import Creditcard2 from './Components/Creditcard2';
import Fd from './Components/Fd';
import VehicleInsurance from './Components/VehicleInsurance';
import GoldLoan from './Components/GoldLoan';
import DocumentsUpload from './Components/DocumentsUpload';
import MortagageLoan from './Components/MortagageLoan';
import BusinessLoan from './Components/BusinessLoan';
import EducationLoan from './Components/EducationLoan';
import CantactUs from './Components/CantactUs';
function App() {
  return (
    <>
    <BrowserRouter >
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="emicalculator" element={ <EMICalculator />} />
      <Route path="register" element={  <Register />} />
      <Route path="login" element={ <Login />} />
      <Route path="homeloan" element={<HomeLoan />} />
      <Route path="/homeloan/applynow" element={ <HomeApplicationForm />} />
      <Route path="/homeloan/applynow/questions" element={ <QuestionnaireForm />} />
      <Route path="/homeloan/emicalculator" element={<EMICalculator />}/>
      <Route path="personalloan" element={ <PersonalLoan />} />
      <Route path="creditscoretracker" element={<CreditScoreTracker />} />
      <Route path="/personalloan/emicalculator" element={<EMICalculator />}/>
      <Route path="/personalloan/applynow" element={<HomeApplicationForm />}/>
      <Route path="/personalloan/applynow/questions" element={<QuestionnaireForm />}/>
      <Route path="creditcar2" element={<Creditcard2 />}/>
      <Route path="fd" element={<Fd />}/>
      <Route path="vehicleinsurance" element={<VehicleInsurance />}/>
      <Route path="goldloan" element={<GoldLoan />}/>
      <Route path="/personalloan/applynow/questions/documents" element={<DocumentsUpload />}/>
      <Route path="/homeloan/applynow/questions/documents" element={<DocumentsUpload />}/>
      <Route path="mortgageloan" element={<MortagageLoan />}/>
      <Route path="businessloan" element={<BusinessLoan />}/>
      <Route path="educationloan" element={<EducationLoan/>}/>
      <Route path="/fd/applynow" element={<HomeApplicationForm />}/>
      <Route path="/fd/applynow/questions" element={<QuestionnaireForm />}/>
      <Route path="/fd/applynow/questions/documents" element={<DocumentsUpload />}/>
      <Route path="/vehicleinsurance/applynow" element={<HomeApplicationForm />}/>
      <Route path="/vehicleinsurance/applynow/questions" element={<QuestionnaireForm/>}/>
      <Route path="/vehicleinsurance/applynow/questions/documents" element={<DocumentsUpload />} />
      <Route path="/goldloan/applynow" element={<HomeApplicationForm />}/>
      <Route path="/goldloan/applynow/questions" element={<QuestionnaireForm />}/>
      <Route path="/goldloan/applynow/questions/documents" element={<DocumentsUpload />}/>
      <Route path="fd/emicalculator" element={<EMICalculator />}/>
      <Route path="vehicleinsurance/emicalculator" element={<EMICalculator />}/>
      <Route path="goldloan/emicalculator" element={<EMICalculator />}/>
      <Route path="cantactus" element={<CantactUs />}/>
      <Route path="/fdeligible" element={<Fd/>}/>
    </Routes>
    </BrowserRouter>
   
    
  
    </>
  );
}

export default App;
