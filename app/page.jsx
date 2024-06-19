'use client'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { TypeAnimation } from 'react-type-animation';
import IconButton from '../components/IconButton/iconButton'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="homePage">
        <div className="container-fluid position-relative">
          <div className="row d-flex align-items-center wrapper">
            <div className="col-md-3">
              <div className="imageWrap d-flex align-items-center justify-content-center">
                <Image src="/images/profile.jpg" className='w-100 h-100' height={400} width={400} />
              </div>
            </div>
            <div className="col-md-9 intro">
              <div className="d-flex">
                <div className="line me-4"></div>
                <h1 className="text-white ">
                  <span className="text-common d-block ">I'M ISSA SERHAN.</span>
                  <div className="animated-text position-relative">
                    <TypeAnimation
                      className='mb-2 typeAnimation'
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'REACT DEVELOPER',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'NODE DEVELOPER',
                        1000,
                        'WORDPRESS DEVELOPER',
                        1000,
                        'FLUTTER DEVELOPER',
                        1000
                      ]}
                      wrapper="h1"
                      speed={50}
                      style={{ fontSize: '70px', display: 'inline-block' }}
                      repeat={Infinity}
                    /></div>
                </h1>
              </div>
              <p className="text-white mb-4">I am a Lebanease based full stack developer focused on NextJS and NodeJS,
                I have over three years of experience as a WordPress developer, focusing on website development and customization. Now
                transitioning to Next.js and Node.js, I aim to leverage modern technologies for scalable and efficient web applications.</p>
              <p></p>
              <div className="d-flex align-items-center iconBox">
                <IconButton href={'/about'} icon={<ArrowForwardIcon />} text={'ABOUT ME'} />
                <IconButton href={"/resume.pdf"} text={"DOWNLOAD CV"} icon={<FileDownloadOutlinedIcon />} download="cv" />
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
}
