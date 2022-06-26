import './projectCard.css'
import { FaExternalLinkAlt } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
// TAGS COMPONENT
const Tag = (arr) => {
    var Stack = arr.arr
    return (
        <><div className='TagDiv'>
            {Stack.map((TStack) => {
                return (
                    <div className='tag' key={TStack}>
                        {TStack}
                    </div>
                )
            })}
        </div>
        </>
    )
}

// PROJECT CARD 
const ProjectCard = (ele) => {
    var Item = ele.data;
    var name = Item.name;
    var about = Item.about;
    var image = Item.image;
    var url = Item.url;
    var tech = Item.tech;
    return (
        <>
            <div className="Project-Card"  >
                {image && <img src={image} className="projectImage" alt={name}/>}
                <div className='subCard'>
                    <p className='title'>{name}</p>
                    <p className='about'>{about}</p>
                    <Tag arr={tech} />
                </div>
                <a href={url} target='_blank' rel="noreferrer" className='URL'>Open &ensp;<FaExternalLinkAlt /> </a>
            </div>
        </>
    )
}

// PROJECT CARD COMPONENT
const ProjectComponent = (PData) => {
    let history = useHistory()
    var ProjectData
    if(PData.flag){
        ProjectData = PData.data;
        window.scrollTo({ top: 0 })
    }
    else if(!PData.flag){
        ProjectData = PData.data.slice(0, 4);
    }
    return (
        <>
            <div className='Project-Card-Container'>
                <h2 className='heading'>Projects </h2>
                <div className='CardWrapper'>
                    {ProjectData.map((ele) => {
                        return (
                            <>
                                <div key={ele.name}>
                                    <ProjectCard data={ele} />
                                </div>
                            </>
                        )
                    })}
                </div>
                {!PData.flag && <button className='redirect' onClick={() => {
                    history.push(`/projects`)
                }}>See More
                </button>}
            </div>
        </>
    );
}

export default ProjectComponent;