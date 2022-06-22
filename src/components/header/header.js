import { Twirl as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import './header.css'

export const scroller = () => {
    const expLink = document.getElementById('Experience');
    expLink.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      })
}
const Header = () => {
    const [IsOpen, SetIsOpen] = useState(false)
    const [Color, SetColor] = useState('#4FD1C5')
    function toggler() {
        SetIsOpen(IsOpen => !IsOpen)
    }
    function toggleColor() {
        if (Color == '#4FD1C5') {
            SetColor((Color) => {
                Color = '#1a1c34'
                return Color
            })
        }
        else {
            SetColor(Color => Color = '#4FD1C5')
        }
    }
    return (
        <>
            <div className='icon'>
                <Hamburger color={Color} size={30} onToggle={() => { toggler(); toggleColor() }} />
            </div>
            <div className={'headerWrapper ' + (IsOpen ? 'open' : 'close')}>
                <div className="header">
                    <div className='menu'>
                        <li className=' first'><Link to="/" className="links">Home</Link></li>
                        <li><Link to="/projects" className="links">Projects</Link></li>
                        <li><Link to="/achievements" className="links">Acievements</Link></li>
                        <li className=' last' onClick={()=> {
                            scroller()
                            sessionStorage.setItem('expFlag',true)}}><Link to='/' className="links">Experience</Link></li>
                        {/* <li >
                        <Link to="/" className="links">Contact me</Link>
                    </li> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header