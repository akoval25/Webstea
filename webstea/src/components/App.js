import React from "react";
import "../index.css";
import "../index.scss";
import Header from "../components/Header.js";
import Hero from "../components/Hero.js";
import About from "../components/About.js";
import Services from "../components/Services.js";
import Info from "../components/Info.js";
import Stages from "../components/Stages.js"
import Advantages from "../components/Advantages.js";
import Technologies from "../components/Technologies.js";
import Portfolio from "../components/Portfolio.js";
import Contact from "../components/Contact.js";
import Blog from "../components/Blog.js";
import FAQ from "../components/FAQ.js";
import Solution from "../components/Solution.js";
import Footer from "../components/Footer.js";

function App() {
    return (
    <React.StrictMode>
        <Header />
        <Hero />
        <About />
        <Services />
        <Info />
        <Stages />
        <Advantages />
        <Technologies />
        <Portfolio />
        <Contact />
        <Blog />
        <FAQ />
        <Solution />
        <Contact />
        <Footer />
    </React.StrictMode>
      );
    }
    
    export default App;