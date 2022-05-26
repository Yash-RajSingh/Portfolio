import './achievementCard.css'
const TypeChecker = (type, position, name) => {

    if (type === 1) {
        var msg = `Comleted the ${name}.`
        return msg
    }
    else if (type === 2) {
        var msg = `Participated in ${name}.`
        return msg
    }
    else if (type === 3) {
        var msg = `Secured ${position} in ${name}.`
        return msg
    }
    else {
        var msg = `Contributed in ${name}.`
        return msg
    }
}

const AchievementCard = (achievement) => {
    var achievement = achievement.data;
    // console.log(achievement)
    var message = `${TypeChecker(achievement.type, achievement.position, achievement.name)}`
    return (
        <>
            <div className='achievementCard'>
                <img src={achievement.image} className="Certificate" />
                {message}
                <div className='InfoDiv'>
                    {achievement.dated ? <span className='date'>{achievement.dated}</span> : " "}
                    <span className='Atag'>{achievement.tag}</span>
                </div>
            </div>
        </>
    )
}

const AchievementComponent = (AchievementData) => {
    var Data = AchievementData.data.slice(0, 6);
    var id = 0;
    return (
        <>
            <div className='Achievement-Card-Container'>
                <h2 className='heading'>Achievements &nbsp; & &nbsp; Endeavours </h2>
                <div className='AchievementWrapper'>
                    {Data.map((element) => {
                        // console.log(element)
                        return (
                            <>
                                < AchievementCard data={element} />
                            </>
                        )
                    })}
                </div>
                <button className='redirect'>See More</button>
            </div>
        </>
    );
}

export default AchievementComponent;

// 1-Completed , 2=Participated in, 3-Secured 4-contributed