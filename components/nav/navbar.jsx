import React from 'react'
import './navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { Work, Email } from '@mui/icons-material/';
import IconButton from '../IconButton/iconButton';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='nav flex-column '>
                <li className='nav-item'>
                    <IconButton href={"/"} text={"Home"} icon={<HomeIcon />} />
                </li>
                <li className='nav-item'>
                    <IconButton href={"/about"} text={"About Me"} icon={<PersonIcon />} />
                </li>
                <li className='nav-item'>
                    <IconButton href={"/portfolio"} text={"Portfolio"} icon={<Work />} />
                </li>
                <li className='nav-item'>
                    <IconButton href={"/contact"} text={"Contact Me"} icon={<Email />} />
                </li>

            </ul>
        </nav>

    )
}

export default Navbar