import React from "react";
import "./LandingPage.css";

// Importing components for the landing page
import Header from "../components/homepage/topNav";
import Hero from "../components/homepage/hero";
import MetricsBar from "../components/homepage/metricsbar";
import About from "../components/homepage/about";
import Categories from "../components/homepage/categories";
import Capabilities from "../components/homepage/capabilities";
import Steps from "../components/homepage/steps";
import Testimonial from "../components/homepage/testominal";
import BottomCTA from "../components/homepage/bottomcta";
import Footer from "../components/homepage/footer";

// Main App component that renders the landing page
export default function App() {
  return (
    <div className="rs-app">
      <Header />
      <Hero />
      <MetricsBar />
      <About />
      <Categories />
      <Capabilities />
      <Steps />
      <Testimonial />
      <BottomCTA />
      <Footer />
    </div>
  );
}