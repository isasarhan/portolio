import React from 'react'
import './portfolio.css'
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import Image from 'next/image'
const Portfolio = () => {
  return (
    <>
      <section className="portfolioPage">
        <div className="container-fluid">
          <div className="hd text-center">
            <span className='title-bg'>WORKS</span>
            <h1>MY <span className='text-common'>PORTFOLIO</span></h1>
          </div>
          <div className="wrapper">

            <div className="box">
              <Image src={'/images/project.png'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <InsertLinkOutlinedIcon />
                <h4 className='position-absolute'>project 1</h4>
              </div>
            </div>
            <div className="box">
              <Image src={'/images/project.png'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <InsertLinkOutlinedIcon />
                <h4 className='position-absolute'>project 1</h4>
              </div>
            </div>
            <div className="box">
              <Image src={'/images/project.png'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <InsertLinkOutlinedIcon />
                <h4 className='position-absolute'>project 1</h4>
              </div>
            </div>
            <div className="box">
              <Image src={'/images/project.png'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <InsertLinkOutlinedIcon />
                <h4 className='position-absolute'>project 1</h4>
              </div>
            </div>
            <div className="box">
              <Image src={'/images/project.png'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <InsertLinkOutlinedIcon />
                <h4 className='position-absolute'>project 1</h4>
              </div>
            </div>
            <div className="box">
              <Image src={'/images/project.png'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <InsertLinkOutlinedIcon />
                <h4 className='position-absolute'>project 1</h4>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio