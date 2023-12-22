import React, { useEffect } from "react";
import Header from "../components/Header.js";
import Contact from "../components/Contact.js";
import Footer from "../components/Footer.js";
import AllPortfolio from "../components/AllPortfolio.js";
import { animateScroll as scroll } from "react-scroll";



function AllPortfolioApp() {
  useEffect(() => {
    scroll.scrollTo(0, {
      duration: 0, 
      smooth: false, 
    });
  }, []);

  return (
    <React.StrictMode>
      <Header />
      <AllPortfolio />
      <Contact />
      <Footer />
    </React.StrictMode>
  );
}

export default AllPortfolioApp;