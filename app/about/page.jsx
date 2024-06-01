'use client'
import React from 'react'
import './about.css'
import IconButton from '../../components/IconButton/iconButton'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const About = () => {
  return (
    <>
      <section className="aboutPage">
        <div className="container-fluid">
          <div className="hd text-center">
            <h1>ABOUT <span className='text-common'>ME</span></h1>
            <span className='title-bg'>RESUME</span>
          </div>
          <div className="row">
            <div className="col-md-6 info">
              <h3 className='text-white text-uppercase mb-5'>
                personal information
              </h3>
              <div className="row h-100">
                <div className="col ">
                  <h4 className='mb-4'><span className='list-title'>First Name: </span>Issa </h4>
                  <h4 className='mb-4'><span className='list-title'>Last Name: </span>Serhan</h4>
                  <h4 className='mb-4'><span className='list-title'>Age: </span>26</h4>
                  <h4 className='mb-4'><span className='list-title'>Address: </span>Lebanon, Beirut</h4>
                  <IconButton href={"/"} text={"Download CV"} icon={<FileDownloadOutlinedIcon />} />
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
                  <span className="count d-flex">12<span className='top-0'>+</span></span>
                  <div className='d-flex'>
                    <span className='line me-2'></span>
                    <h4>YEARS OF EXPERIENCE</h4>
                  </div>
                </div>

                <div className="box">
                  <span className="count d-flex">12<span className='top-0'>+</span></span>
                  <div className='d-flex'>
                    <span className='line me-2'></span>
                    <h4>COMPLETED PROJECTS</h4>
                  </div>
                </div>

                <div className="box">
                  <span className="count d-flex">12<span className='top-0'>+</span></span>
                  <div className='d-flex'>
                    <span className='line me-2'></span>
                    <h4>HAPPY CUSTOMERS</h4>
                  </div>
                </div>

                <div className="box">
                  <span className="count d-flex">12<span className='top-0'>+</span></span>
                  <div className='d-flex'>
                    <span className='line me-2'></span>
                    <h4>CERTIFICATES</h4>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="skillSection">
            <div className='text-center mt-3 mb-5'>
              <h1 className='text-white'>SKILL <span className='text-common'>LEVEL</span></h1>
            </div>
            <div className="row mb-5">
              <div className='col-md-3 d-flex justify-content-center align-items-center flex-column'>
                <CircularProgressbar className='w-50' value={20} maxValue={100} text={`${20}%`} styles={buildStyles({
                  textSize: '16px',
                  textColor: '#fff',
                  pathColor: '#fa5b0f',
                  trailColor: '#595959',
                  backgroundColor: '#3e98c7',
                })} />
                <h4 className='mt-2'>JAVASCRIPT</h4>
              </div>
              <div className='col-md-3 d-flex justify-content-center align-items-center flex-column'>
                <CircularProgressbar className='w-50' value={20} maxValue={100} text={`${20}%`} styles={buildStyles({
                  textSize: '16px',
                  textColor: '#fff',
                  pathColor: '#fa5b0f',
                  trailColor: '#595959',
                  backgroundColor: '#3e98c7',
                })} />
                <h4 className='mt-2'>HTML</h4>
              </div>
              <div className='col-md-3 d-flex justify-content-center align-items-center flex-column'>
                <CircularProgressbar className='w-50' value={20} maxValue={100} text={`${20}%`} styles={buildStyles({
                  textSize: '16px',
                  textColor: '#fff',
                  pathColor: '#fa5b0f',
                  trailColor: '#595959',
                  backgroundColor: '#3e98c7',
                })} />
                <h4 className='mt-2'>FLUTTER</h4>
              </div>
              <div className='col-md-3 d-flex justify-content-center align-items-center flex-column'>
                <CircularProgressbar className='w-50' value={20} maxValue={100} text={`${20}%`} styles={buildStyles({
                  textSize: '16px',
                  textColor: '#fff',
                  pathColor: '#fa5b0f',
                  trailColor: '#595959',
                  backgroundColor: '#3e98c7',
                })} />
                <h4 className='mt-2'>REACT</h4>
              </div>
            </div>
            <div className="row mb-5">
              <div className='col-md-3 d-flex justify-content-center align-items-center flex-column'>
                <CircularProgressbar className='w-50' value={20} maxValue={100} text={`${20}%`} styles={buildStyles({
                  textSize: '16px',
                  textColor: '#fff',
                  pathColor: '#fa5b0f',
                  trailColor: '#595959',
                  backgroundColor: '#3e98c7',
                })} />
                <h4 className='mt-2'>NODEJS</h4>
              </div>
              <div className='col-md-3 d-flex justify-content-center align-items-center flex-column'>
                <CircularProgressbar className='w-50' value={20} maxValue={100} text={`${20}%`} styles={buildStyles({
                  textSize: '16px',
                  textColor: '#fff',
                  pathColor: '#fa5b0f',
                  trailColor: '#595959',
                  backgroundColor: '#3e98c7',
                })} />
                <h4 className='mt-2'>CSS</h4>
              </div>
              <div className='col-md-3 d-flex justify-content-center align-items-center flex-column'>
                <CircularProgressbar className='w-50' value={20} maxValue={100} text={`${20}%`} styles={buildStyles({
                  textSize: '16px',
                  textColor: '#fff',
                  pathColor: '#fa5b0f',
                   pathTransitionDuration: 0.5,
                  trailColor: '#595959',
                  backgroundColor: '#3e98c7',
                })} />
                <h4 className='mt-2'>WORDPRESS</h4>
              </div>
              <div className='col-md-3 d-flex justify-content-center align-items-center flex-column'>
                <CircularProgressbar className='w-50' value={20} maxValue={100} text={`${20}%`} styles={buildStyles({
                  textSize: '16px',
                  textColor: '#fff',
                  pathColor: '#fa5b0f',
                  trailColor: '#595959',
                  backgroundColor: '#3e98c7',
                })} />
                <h4 className='mt-2'>GIT</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About