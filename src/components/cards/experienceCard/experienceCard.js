import './experienceCard.css'
import { FaExternalLinkAlt } from "react-icons/fa";

const ExperienceCard = (data) => {
    // console.log(data)
    var currentData = data.data
    var currentClass = data.class
    return (
        <>
            <div className={'ExperienceCard ' + `${currentClass}`} >
                <h4 className='orgName'>{currentData.organisation}</h4>
                <span className='type'> {currentData.type}</span>
                <span className='duration'> {currentData.end_date}</span> <span className='duration'>{currentData.start_date} to&nbsp; </span> 
                <p className='role'><b> Role - </b>{currentData.role}</p>
                <p className='workDescription'><b>Responsibilities -</b> {currentData.description}</p>
                <a href={currentData.sample} className='workSample'>Work Sample&nbsp; <FaExternalLinkAlt className="Open" />  </a><br />
            </div>
        </>
    )
}

const ExperienceComponent = (EData) => {
    var pos = 0;
    return (
        <>
            <div className='Experience-Card-Container' id='Experience'>
                <h2 className='heading'>Experience</h2>
                <div className='ExperienceCardsContainer2'>
                        <div id='line'></div>
                    <div class='ExperienceCardsWrapper'>
                        {EData.data.map((element) => {
                            pos = pos + 1;
                            var classs = (pos % 2 == 0) ? 'even' : 'odd';
                            return (
                                <ExperienceCard data={element} class={classs} key={pos}/>
                            )
                        })}
                    </div>
                    {/* <button className='redirect'>See More</button> */}
                    {/* <p className='msg'>Looking forward to adding more!</p> */}
                </div>
            </div>
        </>
    );
}

export default ExperienceComponent;