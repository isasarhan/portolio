'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import './contact.css'
import SendIcon from '@mui/icons-material/Send';
import IconButton from '../../components/IconButton/iconButton'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <section className="contactPage">
      <div className="container-fluid">
        <div className="hd text-center">
          <span className='title-bg'>CONTACT</span>
          <h1>GET IN <span className='text-common'>TOUCH</span></h1>
        </div>
        <div className='row'>
          <div className="col-sm-4">
            <div className="info text-white">
              <h1 className='mb-3 fw-bolder'>Don't be shy!</h1>
              <p className=''>Ten the hastened steepest feelings pleasant few surprise property.An brother he do colonel against minutes uncivil.
                Can how elinor warmly mrs basket marked. Led raising expense yet demesne weather musical.</p>
              <div className="iconList d-flex flex-column gap-4">
                <div className="iconItem d-flex align-items-end">
                  <div className="icon me-3"><EmailIcon /></div>
                  <div className="details">
                    <h5 className='m-0'>Mail ME</h5>
                    <span><a className='text-decoration-none text-white' href="mailto:isasarhan.lz@gmail.com">isasarhan.lz@gmail.com</a></span>
                  </div>
                </div>
                <div className="iconItem d-flex align-items-end">
                  <div className="icon me-3"><PhoneIcon /></div>
                  <div className="details">
                    <h5 className='m-0'> Phone Number</h5>
                    <span><a className='text-decoration-none text-white' href="tel:0096170958117">+961 70 956 227</a></span>
                  </div>
                </div>
              </div>
              <div className="socialMedia d-flex align-items-center mt-4 gap-3">
                 <span className='icon'> <FacebookOutlinedIcon /></span>
                 <span className='icon'> <WhatsAppIcon /></span>
                 <span className='icon'> <InstagramIcon /></span>
                 <span className='icon'> <LinkedInIcon /></span>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="row form">
                <div className="col-sm-4">
                  <div class=" mb-3">
                    <input type="text" placeholder='first name' {...register("firstName")} />
                  </div>
                </div>

                <div className="col-sm-4">
                  <div class=" mb-3">
                    <input type="text" placeholder='last name'{...register("lastName")} />
                  </div>
                </div>

                <div className="col-sm-4">
                  <div class=" mb-3">
                    <input type="email" placeholder='email address' {...register("email")} />
                  </div>
                </div>

                <div className="col-sm-12">
                  <div class=" mb-3">
                    <textarea placeholder='message' {...register("message")} />
                  </div>
                </div>
              </div>
              <IconButton icon={<SendIcon />} text={'SEND MESSAGE'} type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact