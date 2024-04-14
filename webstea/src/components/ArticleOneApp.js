import React, { useEffect } from "react";
import Header from "./Header.js";
import Blog from "./Blog.js";
import Footer from "./Footer.js";
import ArticleOne from "./ArticleOne.js";

import { animateScroll as scroll } from "react-scroll";



function ArticleOneApp() {
  useEffect(() => {
    scroll.scrollTo(0, {
      duration: 0, 
      smooth: false, 
    });
  }, []);

  return (
    <React.StrictMode>
      <Header />
      <ArticleOne />
      <Blog />
      <Footer />
    </React.StrictMode>
  );
}

export default ArticleOneApp;