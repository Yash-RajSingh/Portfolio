import './footer.css'
import { SiDiscord, SiGithub, SiGmail, SiWhatsapp, SiLinkedin } from "react-icons/si";
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='socials'>
                    <a href='https://www.linkedin.com/in/yash-raj-singh-8a33a7214/'><SiLinkedin className='socialIcon' /></a>
                    <a href='https://github.com/Yash-RajSingh'><SiGithub className='socialIcon' /></a>
                    <a href='mailto:  yashraj45202@gmail.com'><SiGmail className='socialIcon' /></a>
                    <a href='https://wa.me/qr/PTAZJYSYSUVTN1'><SiWhatsapp className='socialIcon' /></a>
                    <a href='https://discordapp.com/users/HIGHBALL#1346'><SiDiscord className='socialIcon' /></a>
                </div>

                <div className='myName'>
                    <p>YRS</p><span> Student & Web Developer</span>
                </div>
            </div>
        </>
    );
}

export default Footer;