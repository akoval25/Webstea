import React from "react";
import Header from "../components/Header.js";
import Contact from "../components/Contact.js";
import Footer from "../components/Footer.js";


function LandingApp() {
    return (
    <React.StrictMode>
        <Header />
        <Contact />
        <Footer />
    </React.StrictMode>
      );
    }
    
    export default LandingApp;