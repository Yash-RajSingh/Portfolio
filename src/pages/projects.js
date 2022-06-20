import ProjectComponent from '../components/cards/projectCard/projectCard'
import Loader from '../components/loader/loader'
import ProjectData from '../data/projects.json'
import './App.css'

const Projects = () => {
    const style = {
        width: "95%",
        margin: "5% auto",
    };
    return (<>
        <Loader />
        <div className='animate__animated animate__fadeIn' style={style}>
            <ProjectComponent data={ProjectData} flag={true} />
        </div>
    </>)

}

export default Projects