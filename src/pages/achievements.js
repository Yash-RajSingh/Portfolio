import AchievementComponent from "../components/cards/achievementCard/achievementCard";
import Loader from "../components/loader/loader";
import AchievementsData from '../data/endeavours.json'

const Achievements = () => {
    const style = {
        width: "95%",
        margin: "5% auto",
    };
    return (<>
        <Loader />
        <div className='animate__animated animate__fadeIn' style={style}>
            <AchievementComponent data={AchievementsData} flag={true} />
        </div>
    </>);
}

export default Achievements;