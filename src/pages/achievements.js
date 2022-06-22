import AchievementComponent from "../components/cards/achievementCard/achievementCard";
import Loader from "../components/loader/loader";
import AchievementsData from '../data/endeavours.json'

const Achievements = () => {
    return (<>
        <Loader />
        <div className='animate__animated animate__fadeIn' style={{width: "95%", margin:"5% auto", animationDelay:"2.2s"}}>
            <AchievementComponent data={AchievementsData} flag={true} />
        </div>
    </>);
}

export default Achievements;