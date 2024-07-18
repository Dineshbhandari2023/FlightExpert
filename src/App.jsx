// import React from "react";
// import FlightSearchForm from "./components/FlightSearchForm";

// function App() {
//   return (
//     <div className="App">
//       <FlightSearchForm />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
 import TravelBanner from './components/TravelBanner';
 import Banner from './components/HeroSection';


function App() {
  return (
    <div className="App">

//     features/LandingPage
      <Header />
      <Banner/>
      <TravelBanner />
      <Footer />

      <FlightSearchForm />
      

    </div>
  );
}

export default App;

