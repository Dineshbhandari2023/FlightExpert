import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TravelBanner from "./TravelBanner";
import Banner from "./HeroSection";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <TravelBanner />
      <Footer />
    </div>
  );
};

export default Home;
