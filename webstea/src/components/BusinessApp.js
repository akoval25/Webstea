import React, { useEffect } from "react";
import Header from "../components/Header.js";
import Contact from "../components/Contact.js";
import Footer from "../components/Footer.js";
import Business from "../components/Business.js";
import { animateScroll as scroll } from "react-scroll";



function BusinessApp() {
  useEffect(() => {
    scroll.scrollTo(0, {
      duration: 0, 
      smooth: false, 
    });
  }, []);

  return (
    <React.StrictMode>
      <Header />
      <Business />
      <Contact />
      <Footer />
    </React.StrictMode>
  );
}

export default BusinessApp;