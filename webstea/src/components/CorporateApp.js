import React, { useEffect } from "react";
import Header from "../components/Header.js";
import Contact from "../components/Contact.js";
import Footer from "../components/Footer.js";
import Corporate from "../components/Corporate.js";
import { animateScroll as scroll } from "react-scroll";



function CorporateApp() {
  useEffect(() => {
    scroll.scrollTo(0, {
      duration: 0, 
      smooth: false, 
    });
  }, []);

  return (
    <React.StrictMode>
      <Header />
      <Corporate />
      <Contact />
      <Footer />
    </React.StrictMode>
  );
}

export default CorporateApp;