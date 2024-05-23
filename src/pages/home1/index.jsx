/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs1 from "../../components/About-Us1";
import Services1 from "../../components/Services1";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";
import Portfolio1 from "../../components/Portfolio1";
import SkillsCircle from "../../components/Skills-circle";
import Testimonials from "../../components/Testimonials1";
import Team1 from "../../components/Team1";
import Blogs1 from "../../components/Blogs1";
import Contact from "../../components/Contact";
import Brands from "../../components/Brands";
import AboutUs2 from "../../components/About-Us2";

const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <IntroWithHorizontal />
      {/* <AboutUs1 /> */}
      <AboutUs2/>
      <Blogs1 />
      <Services1 />
      {/* <Portfolio1 /> */}
      <SkillsCircle />
      <Brands/>
      <Testimonials />
      {/* <Team1 /> */}
    
      <Contact />
    </LightLayout>
  );
};

export default Home1;
