import './achievementCard.css'
import { useHistory } from 'react-router-dom';

const TypeChecker = (type, position, name) => {
    var msg = "";
    if (type === 1) {
        msg = `Completed the ${name}.`
        return msg
    }
    else if (type === 2) {
        msg = `Participated in ${name}.`
        return msg
    }
    else if (type === 3) {
        msg = `Secured ${position} in ${name}.`
        return msg
    }
    else {
        msg = `Contributed in ${name}.`
        return msg
    }
}

const AchievementCard = (achievements) => {
    var achievement = achievements.data;
    var message = `${TypeChecker(achievement.type, achievement.position, achievement.name)}`
    return (
        <>
            <div className='achievementCard'>
                <img src={achievement.image} className="Certificate" alt={achievement.name}  loading="lazy"/>
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
    let history = useHistory()
    var Data
    if(AchievementData.flag){
        Data = AchievementData.data;
        window.scrollTo({ top: 0 })
    }
    else if(!AchievementData.flag){
        Data = AchievementData.data.slice(0, 6);
    }
    var id=0
    return (
        <>
            <div className='Achievement-Card-Container'>
                <h2 className='heading'>Achievements&nbsp; &&nbsp;Endeavours </h2>
                <div className='AchievementWrapper'>
                    {Data.map((element) => {
                        id=id+1;
                        return (
                            <>
                                < AchievementCard data={element}  key={id} />
                            </>
                        )
                    })}
                </div>
                {!AchievementData.flag && < button className='redirect' onClick={() => {history.push(`/achievements`)}}>See More</button>}
            </div>
        </>
    );
}

export default AchievementComponent;

// 1-Completed , 2=Participated in, 3-Secured 4-contributed