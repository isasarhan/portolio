'use client'
import React from 'react'
import './about.css'
import IconButton from '../../components/IconButton/iconButton'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import WorkIcon from '@mui/icons-material/Work';
import Experience from '../../components/experience/experience';
import VerifiedIcon from '@mui/icons-material/Verified';
import { FaWordpressSimple } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";

const About = () => {
  return (
    <>
      <section className="aboutPage">
        <div className="container-fluid">
          <div className="hd text-center">
            <span className='title-bg'>RESUME</span>
            <h1>ABOUT <span className='text-common'>ME</span></h1>
          </div>
          {/* personal information section starts here */}
          <div className="row">
            <div className="col-md-6 info">
              <h3 className='text-white text-uppercase mb-5'>
                personal information
              </h3>
              <div className="row h-100">
                <div className="col">
                  <h4 className='mb-4'><span className='list-title'>First Name: </span>Issa </h4>
                  <h4 className='mb-4'><span className='list-title'>Last Name: </span>Serhan</h4>
                  <h4 className='mb-4'><span className='list-title'>Age: </span>26</h4>
                  <h4 className='mb-4'><span className='list-title'>Address: </span>Lebanon, Beirut</h4>
                  <IconButton href={"/resume.pdf"} text={"Download CV"} icon={<FileDownloadOutlinedIcon />} download="cv" />
                </div>
                <div className="col ">
                  <h4 className='mb-4'><span className='list-title'>Phone: </span>+96170958117</h4>
                  <h4 className='mb-4'><span className='list-title'>Email: </span>isasarhan.lz@gmail.com</h4>
                  <h4 className='mb-4'><span className='list-title'>Languages: </span>Arabic, English</h4>
                  <h4 className='mb-4'><span className='list-title'>Nationality: </span>Lebanese</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="boxes">
                <div className="box">
                  <span className="count d-flex">4<span className='top-0'>+</span></span>
                  <div className='d-flex'>
                    <span className='line me-2'></span>
                    <h4>YEARS OF EXPERIENCE</h4>
                  </div>
                </div>
                <div className="box">
                  <span className="count d-flex">10<span className='top-0'>+</span></span>
                  <div className='d-flex'>
                    <span className='line me-2'></span>
                    <h4>COMPLETED PROJECTS</h4>
                  </div>
                </div>

                <div className="box">
                  <span className="count d-flex">10<span className='top-0'>+</span></span>
                  <div className='d-flex'>
                    <span className='line me-2'></span>
                    <h4>HAPPY CUSTOMERS</h4>
                  </div>
                </div>

                <div className="box">
                  <span className="count d-flex">8<span className='top-0'>+</span></span>
                  <div className='d-flex'>
                    <span className='line me-2'></span>
                    <h4>CERTIFICATES</h4>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="divider" />
          {/* skill section section starts here */}
          <div className="skillSection">
            <div className='text-center mt-3 mb-5'>
              <h1 className='text-white'>SKILL LEVEL</h1>
            </div>
            <div className="row">
              <div className='col-md-3 d-flex justify-content-center align-items-center flex-column'>
                <CircularProgressbar className='w-50' value={80} maxValue={100} text={`${80}%`} styles={buildStyles({
                  textSize: '16px',
                  textColor: '#fff',
                  pathColor: '#fa5b0f',
                  trailColor: '#595959',
                  backgroundColor: '#3e98c7',
                })} />
                <h4 className='mt-2  mb-5'>JAVASCRIPT</h4>
              </div>
              <div className='col-md-3 d-flex justify-content-center align-items-center flex-column'>
                <CircularProgressbar className='w-50' value={90} maxValue={100} text={`${90}%`} styles={buildStyles({
                  textSize: '16px',
                  textColor: '#fff',
                  pathColor: '#fa5b0f',
                  trailColor: '#595959',
                  backgroundColor: '#3e98c7',
                })} />
                <h4 className='mt-2 mb-5'>HTML</h4>
              </div>
              <div className='col-md-3 d-flex justify-content-center align-items-center flex-column'>
                <CircularProgressbar className='w-50' value={50} maxValue={100} text={`${50}%`} styles={buildStyles({
                  textSize: '16px',
                  textColor: '#fff',
                  pathColor: '#fa5b0f',
                  trailColor: '#595959',
                  backgroundColor: '#3e98c7',
                })} />
                <h4 className='mt-2 mb-5'>FLUTTER</h4>
              </div>
              <div className='col-md-3 d-flex justify-content-center align-items-center flex-column'>
                <CircularProgressbar className='w-50' value={70} maxValue={100} text={`${70}%`} styles={buildStyles({
                  textSize: '16px',
                  textColor: '#fff',
                  pathColor: '#fa5b0f',
                  trailColor: '#595959',
                  backgroundColor: '#3e98c7',
                })} />
                <h4 className='mt-2 mb-5'>REACT</h4>
              </div>
            </div>
            <div className="row mb-5">
              <div className='col-md-3 d-flex justify-content-center align-items-center flex-column'>
                <CircularProgressbar className='w-50' value={80} maxValue={100} text={`${80}%`} styles={buildStyles({
                  textSize: '16px',
                  textColor: '#fff',
                  pathColor: '#fa5b0f',
                  trailColor: '#595959',
                  backgroundColor: '#3e98c7',
                })} />
                <h4 className='mt-2 mb-5'>NODEJS</h4>
              </div>
              <div className='col-md-3 d-flex justify-content-center align-items-center flex-column'>
                <CircularProgressbar className='w-50' value={70} maxValue={100} text={`${70}%`} styles={buildStyles({
                  textSize: '16px',
                  textColor: '#fff',
                  pathColor: '#fa5b0f',
                  trailColor: '#595959',
                  backgroundColor: '#3e98c7',
                })} />
                <h4 className='mt-2 mb-5'>CSS</h4>
              </div>
              <div className='col-md-3 d-flex justify-content-center align-items-center flex-column'>
                <CircularProgressbar className='w-50' value={60} maxValue={100} text={`${60}%`} styles={buildStyles({
                  textSize: '16px',
                  textColor: '#fff',
                  pathColor: '#fa5b0f',
                  pathTransitionDuration: 0.5,
                  trailColor: '#595959',
                  backgroundColor: '#3e98c7',
                })} />
                <h4 className='mt-2 mb-5'>WORDPRESS</h4>
              </div>
              <div className='col-md-3 d-flex justify-content-center align-items-center flex-column'>
                <CircularProgressbar className='w-50' value={50} maxValue={100} text={`${50}%`} styles={buildStyles({
                  textSize: '16px',
                  textColor: '#fff',
                  pathColor: '#fa5b0f',
                  trailColor: '#595959',
                  backgroundColor: '#3e98c7',
                })} />
                <h4 className='mt-2 mb-5'>GIT</h4>
              </div>
            </div>
          </div>
          <div className="divider" />
          {/* experience section starts here */}
          <div className="experienceSection">
            <div className='mt-3 mb-5'>
              <h1 className='text-white text-center mb-5 text-uppercase'>EXPERIENCE & PROJECTS</h1>
              <div className="row">
                <div className="col-sm-6">
                  <Experience company={'Double Seven Agency'} date={'Sep 2023 – Feb-2024'} title={'WORDPRESS DEVELOPER'}
                    icon={<FaWordpressSimple />} location={"Saudi Arabia (Remote)"}>
                    Ten the hastened steepest feelings pleasant few surprise property.An brother he do colonel against minutes uncivil.
                    Can how elinor warmly mrs basket marked. Led raising expense yet demesne weather musical.
                  </Experience>
                </div>
                <div className='col-sm-6'>
                  <Experience company={'Blue-boost'} date={'Aug 2022 - May 2023'} title={'WORDPRESS DEVELOPER'}
                    icon={<FaWordpressSimple />} location={"Lebanon (Remote)"}>
                    Ten the hastened steepest feelings pleasant few surprise property.An brother he do colonel against minutes uncivil.
                    Can how elinor warmly mrs basket marked. Led raising expense yet demesne weather musical.
                  </Experience>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-sm-6">
                  <Experience company={'Rise Holding Group'} date={'Feb 2020 - Jul 2022'} title={'WORDPRESS DEVELOPER'}
                    icon={<FaWordpressSimple />} location={'Toronto, Canada  (Remote)'}>
                    Ten the hastened steepest feelings pleasant few surprise property.An brother he do colonel against minutes uncivil.
                    Can how elinor warmly mrs basket marked. Led raising expense yet demesne weather musical.
                  </Experience>
                </div>
                <div className='col-sm-6'>
                  <Experience company={'SCANDSTER'} date={'Jan 2021 - Aug 2022'} title={'WORDPRESS DEVELOPER'}
                    icon={<FaWordpressSimple />} location={'Beirut, Lebanon (Remote)'}>
                    Ten the hastened steepest feelings pleasant few surprise property.An brother he do colonel against minutes uncivil.
                    Can how elinor warmly mrs basket marked. Led raising expense yet demesne weather musical.
                  </Experience>
                </div>
              </div>
            </div>


            <div className='mt-3 mb-5'>
              <h1 className='text-white text-center mb-5 text-uppercase'>EDUCATION & Certifications</h1>
              <div className="row">
                <div className="col-sm-6">
                  <Experience company={' Bachelor’s Degree'} date={'2022'} title={'COMPUTER SCIENCE'}
                    icon={<FaCode />} location={"Lebanese University, Beirut, Lebanon"}>
                    Ten the hastened steepest feelings pleasant few surprise property.An brother he do colonel against minutes uncivil.
                    Can how elinor warmly mrs basket marked. Led raising expense yet demesne weather musical.
                  </Experience>
                </div>
                <div className='col-sm-6'>
                  <Experience company={'LinkedIn'} date={'2023'} title={'NODE JS'}
                    icon={<FaLinkedin />} location={"Certifications"}>
                    1-Building RESTful APIS node & express /
                    <span className='text-common'> 2-Advanced Express / </span>
                    3-Advanced Nodejs /
                    <span className='text-common'> 4-NodeJs Design Patterns / </span>
                    5-Building a website with node & express /
                    <span className='text-common'> 6-Databases for Nodejs</span>
                  </Experience>
                </div>
                <div className='col-sm-6 '>
                  <Experience company={'Mosh Hamedani'} date={'2023'} title={'REACT JS - NODE JS'}
                    icon={<VerifiedIcon />} location={"Certifications"}>
                    Node.js Course - <span className='text-common'>(15hrs)</span> <br />
                    Mastering React Course - <span className='text-common'>(13hrs) </span>
                  </Experience>
                </div>
                <div className='col-sm-6 '>
                  <Experience company={'Udemy'} date={'2023 - 2024'} title={'WORDPRESS - FLUTTER'}
                    icon={<SiUdemy />} location={"Certifications"}>
                    Become a WordPress Developer: Unlocking Power With Code - <span className='text-common'>By Brad Schiff (40+ hrs)</span> <br />
                    Flutter & Dart - The Complete Guide [2024 Edition] - <span className='text-common'>By Maximilian Schwarzmüller (30 hrs)</span> <br />
                  </Experience>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About