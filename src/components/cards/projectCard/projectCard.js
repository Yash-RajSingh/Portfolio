import './projectCard.css'
import { FaExternalLinkAlt } from "react-icons/fa";

// TAGS COMPONENT
const Tag = (arr) => {
    var Stack = arr.arr
    return (
        <><div className='TagDiv'>
            {Stack.map((TStack) => {
                return (
                    <div className='tag'>
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
                {image && <img src={image} className="projectImage" />}
                <div className='subCard'>
                    <p className='title'>{name}</p>
                    <p className='about'>{about}</p>
                    <Tag arr={tech} />
                </div>
                <a href={url} target='_blank' className='URL'>Open &ensp;<FaExternalLinkAlt /> </a>
            </div>
        </>
    )
}

// PROJECT CARD COMPONENT
const ProjectComponent = (PData) => {
    var ProjectData = PData.data.slice(0, 4);
    return (
        <>
            <div className='Project-Card-Container'>
                <h2 className='heading'>Projects </h2>
                <div className='CardWrapper'>
                    {ProjectData.map((ele) => {
                        // console.log(ele)
                        return (
                            <>
                                <div>
                                    <ProjectCard data={ele} />
                                </div>
                            </>
                        )
                    })}
                </div>
                <button className='redirect'>See More
                </button>
            </div>
        </>
    );
}

export default ProjectComponent;