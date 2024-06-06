import React, { useEffect } from "react";
import Header from "./Header.js";
import SeparateArticleHeader from "./SeparateArticleHeader.js";
import SeparateArticleFooter from "./SeparateArticleFooter.js";
import Footer from "./Footer.js";
import Contact from "../components/Contact.js";
import ArticleFour from "./ArticleFour.js";

import { animateScroll as scroll } from "react-scroll";



function ArticleFourApp() {
  useEffect(() => {
    scroll.scrollTo(0, {
      duration: 0, 
      smooth: false, 
    });
  }, []);

  return (
    <React.StrictMode>
      <Header />
      <SeparateArticleHeader />
      <ArticleFour />
      <SeparateArticleFooter />
      <Contact />
      <Footer />
    </React.StrictMode>
  );
}

export default ArticleFourApp;