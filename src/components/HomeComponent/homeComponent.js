import './homeComponent.css'
import worker from '../../assets/images/worker3.png'
import CardContainer from '../cardContainer/cardContainer'
import AchievementComponent from '../cards/achievementCard/achievementCard'
import ExperienceComponent from '../cards/experienceCard/experienceCard'
import ProjectComponent from '../cards/projectCard/projectCard'
import About from '../about/about'
import SkillsContainer from '../cards/skillsCard/skillsCard'
import { useScrollTo } from 'react-use-window-scroll';
//DATA IMPORTS
import ProjectsData from '../../data/projects.json'
import AchievementData from '../../data/endeavours.json'
import ExperienceData from '../../data/experience.json'
import Skills from '../../data/skills.json'
import Loader from '../loader/loader'

const HomeComponent = () => {
    const scrollTo = useScrollTo();
    window.scrollTo({ top: 0 })
    return (
        <>
            <Loader />
            <div className='front-container animate__animated animate__fadeIn'>
                <div className='container1'>
                    <h2 className='header'>Hey! I'm Yash,</h2>
                    <div className='animation-container'>
                        <h1 className='typingText'>A Web Developer</h1>
                    </div>
                </div >
                <div className='container2'>
                    <img src={worker} className='me' />
                    <div> </div>
                </div>
            </div>
            <CardContainer componentToPassDown={<About />} />
            <CardContainer componentToPassDown={<SkillsContainer data={Skills} />} />
            <CardContainer componentToPassDown={<ProjectComponent data={ProjectsData} flag={false} />} />
            <CardContainer componentToPassDown={<AchievementComponent data={AchievementData} flag={false} />} />
            <CardContainer componentToPassDown={<ExperienceComponent data={ExperienceData} />} />

        </>
    )
}
export default HomeComponent