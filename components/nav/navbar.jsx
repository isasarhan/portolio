'use client'
import React, { useContext } from 'react'
import './navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { Work, Email } from '@mui/icons-material/';
import IconButton from '../IconButton/iconButton';
import { ThemeContext } from '../../context/ThemeContext';
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

const Navbar = ({className}) => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className={`${className} appnavbar`}>
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
                <li className='nav-item'>
                    <IconButton href={""} text={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                        icon={theme === 'dark' ? <FiSun /> : <FaMoon />} onClick={toggleTheme} />
                </li>

            </ul>
        </nav>

    )
}

export default Navbar