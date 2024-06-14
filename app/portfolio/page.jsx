import React from 'react'
import './portfolio.css'
import { FaInfoCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Image from 'next/image'
import { IconButton } from '@mui/material';
import Link from 'next/link';
const Portfolio = () => {
  return (
    <>
      <section className="portfolioPage">
        <div className="container-fluid">
          <div className="hd text-center">
            <span className='title-bg'>WORKS</span>
            <h1>MY <span className='text-common'>PORTFOLIO</span></h1>
          </div>
          <h1 className='text-center text-white'>FRONT-<span className='text-common'>END</span> (NextJS)</h1>
          <div className="boxWrapper">
            <div className="box">
              <Image src={'/images/projects/e-commerce-1.jpg'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <div className='d-flex align-items-center '>
                  <IconButton><Link href={''} > <FaEye /></Link></IconButton>
                  <IconButton><Link href={'https://github.com/isasarhan/ecommerce-ui'}> <FaGithub /></Link></IconButton>
                  <IconButton><FaInfoCircle /></IconButton>
                </div>
                <h4 className='position-absolute'>Ecommerce Store UI</h4>
              </div>
            </div>

            <div className="box">
              <Image src={'/images/projects/e-commerce-dashboard-1.jpg'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <div className='d-flex align-items-center'>
                  <IconButton><Link href={'https://next-ecommerce-dashboard-eight.vercel.app/'}> <FaEye /></Link></IconButton>
                  <IconButton><Link href={'https://github.com/isasarhan/next-ecommerce-dashboard'}> <FaGithub /></Link></IconButton>
                  <IconButton><FaInfoCircle /></IconButton>
                </div>
                <h4 className='position-absolute'>Ecommerce Store Admin Dashboard</h4>
              </div>
            </div>
            <div className="box">
              <Image src={'/images/projects/portfolio.jpg'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <div className='d-flex align-items-center'>
                <IconButton><Link href={'https://portolio-zeta.vercel.app/'}> <FaEye /></Link></IconButton>
                  <IconButton><Link href={'https://github.com/isasarhan/portolio'}> <FaGithub /></Link></IconButton>
                  <IconButton><FaInfoCircle /></IconButton>
                </div>
                <h4 className='position-absolute'>Personal Portfolio</h4>
              </div>
            </div>
            <div className="box">
              <Image src={'/images/projects/management-system-3.jpg'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <div className='d-flex align-items-center'>
                  <IconButton><Link href={'https://frontend-goldlab.vercel.app/auth/login'}> <FaEye /></Link></IconButton>
                  <IconButton><Link href={'https://github.com/isasarhan/frontend-goldlab'}> <FaGithub /></Link></IconButton>
                  <IconButton><FaInfoCircle /></IconButton>
                </div>
                <h4 className='position-absolute'>Jewelry Factory Mangement System UI</h4>
              </div>
            </div>
          </div>
          <h1 className='text-center text-white'>BACK-<span className='text-common'>END</span> (NodeJS)</h1>
          <div className="boxWrapper">
            <div className="box">
              <Image src={'/images/projects/jewelry.jpg'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <div className='d-flex align-items-center'>
                  <IconButton><Link href={'https://gold-lab-backend.onrender.com'}> <FaEye /></Link></IconButton>
                  <IconButton><Link href={'https://github.com/isasarhan/backend-goldlab'}> <FaGithub /></Link></IconButton>
                  <IconButton><FaInfoCircle /></IconButton>
                </div>
                <h4 className='position-absolute'>Jewelry Factory Mangement System API</h4>
              </div>
            </div>
            <div className="box">
              <Image src={'/images/projects/ecommerce-api.jpg'} width={300} height={200} />
              <div className="overlay d-flex align-items-center justify-content-center ">
                <div className='d-flex align-items-center'>
                  <IconButton><Link href={'https://ecommerceapi-xu9h.onrender.com'}> <FaEye /></Link></IconButton>
                  <IconButton><Link href={'https://github.com/isasarhan/ecommerceapi'}> <FaGithub /></Link></IconButton>
                  <IconButton><FaInfoCircle /></IconButton>
                </div>
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