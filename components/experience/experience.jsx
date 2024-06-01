import React, { Children } from 'react'
import './experience.css'
const Experience = ({ title, icon, date, company, children }) => {
    return (
        <div className="experience position-relative text-white d-flex ">
            <div className="icon d-flex align-items-center justify-content-center">{icon}</div>
            <div className="content">
                <div className="date mb-3">{date}</div>
                <h4 className="title pb-3 fw-bold">{title} - <span className='company'>{company}</span> </h4>
                <div className="description"> {children}</div>
            </div>
        </div>
    )
}

export default Experience