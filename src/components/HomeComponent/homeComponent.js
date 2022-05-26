import './homeComponent.css'
import worker from '../../assets/images/worker3.png'
import CardContainer from '../cardContainer/cardContainer'
import AchievementComponent from '../cards/achievementCard/achievementCard'
import ExperienceComponent from '../cards/experienceCard/experienceCard'
import ProjectsData from '../../data/projects.json'
import AchievementData from '../../data/endeavours.json'
import ExperienceData from '../../data/experience.json'
import ProjectComponent from '../cards/projectCard/projectCard'

const HomeComponent = () => {
    return (
        <>
            <div className='front-container'>
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
            <CardContainer componentToPassDown={<ProjectComponent data={ProjectsData} />} />
            <CardContainer componentToPassDown={<AchievementComponent data={AchievementData} />} />
            <CardContainer componentToPassDown={<ExperienceComponent data={ExperienceData} />} />

            
        </>
    )
}
export default HomeComponent