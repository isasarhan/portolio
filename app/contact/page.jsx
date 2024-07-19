'use client'
import React from 'react'
import './contact.css'
import SendIcon from '@mui/icons-material/Send';
import IconButton from '../../components/IconButton/iconButton'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mnqekvyw");
  if (state.succeeded) {
    return (
      <section className="contactPage" >
        <div className="container-fluid ">
          <div className="hd text-center m-auto d-flex justify-content-center align-items-center flex-column " style={{ height: '80vh' }}>
            <h2 className='text-color'>Thank you for your Message</h2>
            <br />
            <IconButton icon={<SendIcon />} text={'BACK HOME'} href='/' />
          </div>
        </div>
      </section>)
  }
  return (
    <section className="contactPage">
      <div className="container-fluid">
        <div className="hd text-center">
          {/* <span className='title-bg'>CONTACT</span> */}
          <h1 className='pageTitle '>GET IN <span className='text-common'>TOUCH</span></h1>
        </div>
        <div className='row'>
          <div className="col-sm-4">
            <div className="info text-color">
              <h1 className='mb-3 fw-bolder'>Don't be shy!</h1>
              <p className=''>I would love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to get in touch using the form below or through any of my social media channels.
                Your message is important to me, and I will respond as promptly as possible.</p>
              <div className="iconList d-flex flex-column gap-4">
                <div className="iconItem d-flex align-items-end">
                  <div className="icon me-3"><EmailIcon /></div>
                  <div className="details">
                    <h5 className='m-0'>Mail ME</h5>
                    <span><a className='text-decoration-none text-color' href="mailto:issa-sarhan@hotmail.com">issa-sarhan@hotmail.com</a></span>
                  </div>
                </div>
                <div className="iconItem d-flex align-items-end">
                  <div className="icon me-3"><PhoneIcon /></div>
                  <div className="details">
                    <h5 className='m-0'> Phone Number</h5>
                    <span><a className='text-decoration-none text-color' href="tel:0096170958117">+961 70 956 227</a></span>
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
            <form action="https://formspree.io/f/mnqekvyw" onSubmit={handleSubmit} method='POST'>
              <div className="row form">
                <div className="col-sm-4">
                  <div class=" mb-3">
                    <input id="firstName" type="text" name="firstName" placeholder='first name' />
                  </div>
                </div>

                <div className="col-sm-4">
                  <div class=" mb-3">
                    <input id="lastName" type="text" name="lastName" placeholder='last name' />
                  </div>
                </div>

                <div className="col-sm-4">
                  <div class=" mb-3">
                    <input id="email" type="email" name="email" placeholder='email address' />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div className="col-sm-12">
                  <div class=" mb-3">
                    <textarea id="message" name="message" placeholder='message' />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                </div>
              </div>
              <IconButton icon={<SendIcon />} text={'SEND MESSAGE'} type="submit" disabled={state.submitting} />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact