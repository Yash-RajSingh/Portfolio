import './homeComponent.css'
import worker from '../../assets/images/worker3.png'
import CardContainer from '../cardContainer/cardContainer'
import AchievementComponent from '../cards/achievementCard/achievementCard'
import ExperienceComponent from '../cards/experienceCard/experienceCard'
import ProjectComponent from '../cards/projectCard/projectCard'
import Footer from '../footer/footer'
import About from '../about/about'
import SkillsContainer from '../cards/skillsCard/skillsCard'

//DATA IMPORTS
import ProjectsData from '../../data/projects.json'
import AchievementData from '../../data/endeavours.json'
import ExperienceData from '../../data/experience.json'
import Skills from '../../data/skills.json'

const HomeComponent = () => {
    return (
        <>
            <div className='front-container animate__animated animate__slideInLeft'>
                <div className='container1'>
                    <h2 className='header'>Hey! I'm Yash,</h2>
                    <div className='animation-container'>
                        <h1 className='typingText'>A Web Developer</h1>
                    </div>
                </div >
                <div className='container2'>
                    <img src={ worker } className='me' />
                    <div> </div>
                </div>
            </div>
            <CardContainer componentToPassDown={<About/>} />
            <CardContainer componentToPassDown={<SkillsContainer data={Skills} />} />
            <CardContainer componentToPassDown={<ProjectComponent data={ProjectsData} />} />
            <CardContainer componentToPassDown={<AchievementComponent data={AchievementData} />} />
            <CardContainer componentToPassDown={<ExperienceComponent data={ExperienceData} />} />

            <Footer />
        </>
    )
}
export default HomeComponent