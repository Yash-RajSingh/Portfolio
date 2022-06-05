import './skillsCard.css'

const SkillCard = (data) => {
    return (<>
        <div className='skillcard'>
            <p>{data.data}</p>
        </div>
    </>)
}

const SkillsContainer = (skill) => {
    var count = skill.data;
    return (
        <>
            <div className='SkillContainer'>
                <h2 className='heading'>Skills</h2>
                <div className='SkillWrapper'>
                    {count.map((element) => {
                        return (<SkillCard data={element} />);

                    })}
                </div>
            </div>
        </>
    )
}
export default SkillsContainer;