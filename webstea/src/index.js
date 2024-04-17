import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { LangProvider } from './scripts/LangContext.js';
import App from "./components/App.js";
import LandingApp from "./components/LandingApp.js";
import BusinessApp from "./components/BusinessApp.js";
import StoreApp from "./components/StoreApp.js";
import CorporateApp from "./components/CorporateApp.js";
import CatalogApp from "./components/CatalogApp.js";
import CustomApp from "./components/CustomApp.js";
import AllPortfolioApp from "./components/AllPortfolioApp.js";
import ArticlesApp from "./components/ArticlesApp.js";
import ArticleOneApp from "./components/ArticleOneApp.js";
import ArticleTwoApp from "./components/ArticleTwoApp.js";
import ArticleThreeApp from "./components/ArticleThreeApp.js";
import ArticleFourApp from "./components/ArticleFourApp.js";
import ArticleFiveApp from "./components/ArticleFiveApp.js";
import ArticleSixApp from "./components/ArticleSixApp.js";
import NotFoundApp from "./components/NotFoundApp.js";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




const Apps = () => {
  return (
    <Router>
      <Routes>
        <Route path="/en" element={<App />} />
        <Route path="/ua" element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="/Webstea" element={<App />} />
        <Route path="/ua/landing-page" element={<LandingApp />} />
        <Route path="/en/landing-page" element={<LandingApp />} />
        <Route path="/ua/business-card" element={<BusinessApp />} />
        <Route path="/en/business-card" element={<BusinessApp />} />
        <Route path="/ua/e-store" element={<StoreApp />} />
        <Route path="/en/e-store" element={<StoreApp />} />
        <Route path="/ua/corporate" element={<CorporateApp />} />
        <Route path="/en/corporate" element={<CorporateApp />} />
        <Route path="/ua/catalog" element={<CatalogApp />} />
        <Route path="/en/catalog" element={<CatalogApp />} />
        <Route path="/ua/custom" element={<CustomApp />} />
        <Route path="/en/custom" element={<CustomApp />} />
        <Route path="/ua/portfolio" element={<AllPortfolioApp />} />
        <Route path="/en/portfolio" element={<AllPortfolioApp />} />
        <Route path="/ua/blog" element={<ArticlesApp />} />
        <Route path="/en/blog" element={<ArticlesApp />} />
        <Route path="/ua/blog/ai-for-business" element={<ArticleOneApp />} />
        <Route path="/en/blog/ai-for-business" element={<ArticleOneApp />} />
        <Route path="/ua/blog/internet-of-things" element={<ArticleTwoApp />} />
        <Route path="/en/blog/internet-of-things" element={<ArticleTwoApp />} />
        <Route path="/ua/blog/blockchain-and-crypto" element={<ArticleThreeApp />} />
        <Route path="/en/blog/blockchain-and-crypto" element={<ArticleThreeApp />} />
        <Route path="/ua/blog/cloud-technologies" element={<ArticleFourApp />} />
        <Route path="/en/blog/cloud-technologies" element={<ArticleFourApp />} />
        <Route path="/ua/blog/machine-learning-in-medicine" element={<ArticleFiveApp />} />
        <Route path="/en/blog/machine-learning-in-medicine" element={<ArticleFiveApp />} />
        <Route path="/ua/blog/cyber-security" element={<ArticleSixApp />} />
        <Route path="/en/blog/cyber-security" element={<ArticleSixApp />} />
        <Route path="*" element={<NotFoundApp />} />
      </Routes>
    </Router>
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider>
      <Apps />
    </LangProvider>
  </React.StrictMode>
);

reportWebVitals();

