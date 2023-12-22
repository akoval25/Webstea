import React, { useEffect } from "react";
import Header from "../components/Header.js";
import Contact from "../components/Contact.js";
import Footer from "../components/Footer.js";
import Catalog from "../components/Catalog.js";
import { animateScroll as scroll } from "react-scroll";



function CatalogApp() {
  useEffect(() => {
    scroll.scrollTo(0, {
      duration: 0, 
      smooth: false, 
    });
  }, []);

  return (
    <React.StrictMode>
      <Header />
      <Catalog />
      <Contact />
      <Footer />
    </React.StrictMode>
  );
}

export default CatalogApp;