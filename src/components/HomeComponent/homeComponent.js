import "./homeComponent.css";
import worker from "../../assets/images/worker3.png";
import CardContainer from "../cardContainer/cardContainer";
import AchievementComponent from "../cards/achievementCard/achievementCard";
import ExperienceComponent from "../cards/experienceCard/experienceCard";
import ProjectComponent from "../cards/projectCard/projectCard";
import About from "../about/about";
import SkillsContainer from "../cards/skillsCard/skillsCard";
import Loader from "../loader/loader";
import { useEffect } from "react";
//DATA IMPORTS
import ProjectsData from "../../data/projects.json";
import AchievementData from "../../data/endeavours.json";
import ExperienceData from "../../data/experience.json";
import Skills from "../../data/skills.json";

const HomeComponent = () => {
  window.scrollTo({ top: 0 });
  useEffect(() => {
    const expFlag = sessionStorage.getItem("expFlag");
    if (expFlag) {
      const expLink = document.getElementById("Experience");
      expLink.scrollIntoView({
        behavior: "smooth",
        block: "start"
        // inline: "center",
      });
      sessionStorage.clear();
    }
  });
  return (
    <>
      <Loader />
      <div className="front-container animate__animated animate__fadeIn">
        <div className="container1">
          <h2 className="header">Hey! I'm Yash,</h2>
          <div className="animation-container">
            <h1 className="typingText">A Web Developer</h1>
          </div>
        </div>
        <div className="container2">
          <img src={worker} className="me" alt="Worker" />
          <div> </div>
        </div>
      </div>
      <CardContainer componentToPassDown={<About />} />
      <CardContainer componentToPassDown={<SkillsContainer data={Skills} />} />
      <CardContainer
        componentToPassDown={
          <ProjectComponent data={ProjectsData} flag={false} />
        }
      />
      <CardContainer
        componentToPassDown={
          <AchievementComponent data={AchievementData} flag={false} />
        }
      />
      <div id="Experience">
        <CardContainer
          componentToPassDown={<ExperienceComponent data={ExperienceData} />}
        />
      </div>
    </>
  );
};
export default HomeComponent;
