import './about.css'
import ME from '../../assets/me.jpg'
// import ME2 from '../../assets/me2.jpg'
import Resume from '../../assets/Resume.pdf'

const About = () => {
    const handleClick = () => {
        window.open(Resume, '_blank')
    }
    return (
        <>
            <div className='aboutContainer'>
                <h2 className='heading'>About Me</h2>
                <div className='aboutWrapper'>
                    <img src={ME} alt="Me" />
                    <div className='aboutMe'>
                        <p>
                            A software developer and a technophile for life, myself 
                            <b> Yash Raj Singh,</b> a senior in the prestigious Guru Gobind Singh 
                            Indraprastha University, currently pursuing Bachelor of Computer Applications. 
                            I've been deep into the sphere of web technologies and I can use my technical 
                            prowess to solve any problem and create any wonder that you'd like.</p>
                        <button onClick={handleClick} className="resume">Resume</button>
                    </div>
                    {/* <div className='aboutMe'>
                    <p>Hey there! My name is <b>Yash Raj Singh</b>, <br />
                     I'm a second year student currently pursuing Bachelor of Computer Application from
                     Guru Gobind Singh Indraprastha University. I'm a budding Frontend developer (PS! 
                     soon I'll be a full stack developer), looking forward to hone my skills and learn new things
                     while contributing to anything and everything that I can. </p>
                     <button onClick={handleClick} className="resume">Resume</button>
                </div> */}
                </div>
            </div>
        </>
    );
}

export default About;