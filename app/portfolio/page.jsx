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
          <h1 className='text-center text-white'>FRONT-<span className='text-common'>END</span></h1>
          <div className="boxWrapper">
            <div className="box">
              <Image src={'/images/projects/e-commerce-1.jpg'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <InsertLinkOutlinedIcon />
                <h4 className='position-absolute'>Ecommerce Store UI</h4>
              </div>
            </div>

            <div className="box">
              <Image src={'/images/projects/e-commerce-dashboard-1.jpg'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <InsertLinkOutlinedIcon />
                <h4 className='position-absolute'>Ecommerce Store Admin Dashboard</h4>
              </div>
            </div>
            <div className="box">
              <Image src={'/images/projects/portfolio.jpg'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <InsertLinkOutlinedIcon />
                <h4 className='position-absolute'>Personal Portfolio</h4>
              </div>
            </div>
            <div className="box">
              <Image src={'/images/projects/management-system-3.jpg'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <InsertLinkOutlinedIcon />
                <h4 className='position-absolute'>Jewelry Factory Mangement System UI</h4>
              </div>
            </div>
          </div>
          <h1 className='text-center text-white'>BACK-<span className='text-common'>END</span></h1>
          <div className="boxWrapper">
            <div className="box">
              <Image src={'/images/projects/jewelry.jpg'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <InsertLinkOutlinedIcon />
                <h4 className='position-absolute'>Jewelry Factory Mangement System API</h4>
              </div>
            </div>
            <div className="box">
              <Image src={'/images/projects/ecommerce-api.jpg'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <InsertLinkOutlinedIcon />
                <h4 className='position-absolute'>Ecommerce Store API</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio