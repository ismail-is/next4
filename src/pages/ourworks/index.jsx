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
import WorkHeader from "../../components/Work-header";
import WorkFourColumn from "../../components/Work-Four-Column";
import PageHeader from "../../components/Page-header";

const ourworks = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <PageHeader
        title="Our Works"
        fullPath={[
         
        ]}
        image="/assets/img/Architectures/contactheader.jpg"
      />
      {/* <IntroWithHorizontal /> */}
      
      {/* <AboutUs1 /> */}
      {/* <AboutUs2/> */}
      <Blogs1 />
      {/* <Services1 /> */}
      {/* <Portfolio1 /> */}
      {/* <SkillsCircle /> */}
      {/* <Brands/> */}
      {/* <Testimonials /> */}
      {/* <Team1 /> */}
<WorkFourColumn/>
      <Contact />
    </LightLayout>
  );
};

export default ourworks;
