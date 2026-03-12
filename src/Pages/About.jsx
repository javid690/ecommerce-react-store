import React from "react";
import AboutHero from "../Components/Abouts/AboutHero";
import OurStory from "../Components/Abouts/OurStory";
import Delivery from "../Components/Delivery/Delivery";
import CompanyPartners from "../Components/Abouts/CompanyPartners";
const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <OurStory />
      <Delivery />
      <CompanyPartners />
    </div>
  );
};

export default About;
