import React, { useEffect } from "react";
import Header from "../components/Header.js";
import NotFound from "../components/NotFound.js";
import Footer from "../components/Footer.js";

import { animateScroll as scroll } from "react-scroll";



function NotFoundApp() {
  useEffect(() => {
    scroll.scrollTo(0, {
      duration: 0, 
      smooth: false, 
    });
  }, []);

  return (
    <React.StrictMode>
      <Header />
      <NotFound />
      <Footer />
    </React.StrictMode>
  );
}

export default NotFoundApp;