import './experienceCard.css'

const ExperienceCard = (data) =>{
    console.log(data)
    return( 
        <> 
            <div className='ExperienceCard'>
                <p>{data.data.organisation}</p>
                <p>{data.data.description}</p>
                <span className='startDate'>{data.data.start_date}</span>
                <span className='endDate'>{data.data.end_date}</span>
                <span className='role'>{data.data.role}</span>
                <span>{data.data.sample}</span>
                <span>{data.data.type}</span>
            </div>
        </>
    )
}

const ExperienceComponent = (EData) => {
    // console.log(EData)
    return (
        <>
            <div className='Experience-Card-Container'>
                <h2 className='heading'>Experience</h2>
                <div class='EventCardWrapper'>
                    {EData.data.map((element)=>{
                        return( 
                            <> 
                                <ExperienceCard data={element} />
                            </>
                        )
                    })}
                </div>
                <button className='redirect'>See More</button>
            </div>
        </>
    );
}

export default ExperienceComponent;