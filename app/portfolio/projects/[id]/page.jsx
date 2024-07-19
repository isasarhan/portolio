'use client'
import React, { useState } from 'react'
import projects from './projects.json'
import './project.css'
import Slider from 'react-slick'

const SingleProjectPage = ({ params }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [featuredImg, setFeaturedImg] = useState(projects[params.id]?.featuredImg);

  const goToImg = (url) => {
    setFeaturedImg(url)
  };
  return (

    <div className='projectDetails position-relative'>
      <div className="container-fluid">
        <div className="hd text-center">
          <h1 className='pageTitle '>PROJECT <span className='text-common'>DETAILS</span></h1>
        </div>

        <div className="row w-100 position-relative p-0 m-0" >
          <div className="col-sm-7 border-0 shadow card rounded-3 position-relative overflow-hidden p-sm-4">
            <img alt="" src={featuredImg} className="p-sm-2 rounded-4" />
            <Slider {...settings} className="zoomSlider " >
              {
                projects[params.id]?.images.map((image) => {
                  return <div className="item p-sm-3 p-2">
                    <img src={image} alt="" className="" onClick={() => goToImg(image)} />
                  </div>
                })
              }
            </Slider>
          </div>
          <div className="col-sm-5 p-sm-3 ">
            <h2 className='fs-1 text-common text-center mt-4'>{projects[params.id]?.name}</h2>
            <p className='description mt-5 mb-4 '>{projects[params.id]?.description}</p>
            <span className="details " >
              <div className='mb-4'>Status: <span className={projects[params.id]?.status === 'production' ? `btn btn-success ms-2` : 'btn btn-warning ms-2'}>
                {projects[params.id]?.status} </span><br />
              </div>
              <span className='fw-bold fs-5'>Technologies used: </span>
              <div className='list list-inline'>
                {projects[params.id]?.technologies.map((technology) => {
                  return <div key={technology} className='technology list-inline-item'>{technology}</div>
                })}
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProjectPage