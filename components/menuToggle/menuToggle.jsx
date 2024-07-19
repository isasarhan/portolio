'use client';
import React from 'react';
import { IoMdMenu } from "react-icons/io";
import Navbar from "../nav/navbar";
import './menuToggle.css';
import { useSidebarContext } from '../../context/MenuContext';

const MenuToggle = () => {
    const { showCanvas, toggleCanvas } = useSidebarContext();

    return (
        <>
            <button onClick={toggleCanvas} className="menuIcon ">
                <span className="iconMenu"><IoMdMenu /></span>
            </button>
            <Navbar className={showCanvas ? "show" : ""} />
        </>
    );
};

export default MenuToggle;
