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
        <div className="container-fluid">
          <div className="row d-flex align-items-center wrapper">
            <div className="col-md-4 ">
              <div className="imageWrap d-flex align-items-center">
                <Image  src="/images/profile.png" className='w-100 h-100' height={400} width={400}/>
              </div>
            </div>
            <div className="col-md-8 intro">
              <div className="d-flex">
                <div className="line me-4"></div>
                <h1 className="text-white ">
                  <span className="text-common d-block">I'M ISSA SERHAN.</span>
                  <TypeAnimation
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
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '70px', display: 'inline-block' }}
                    repeat={Infinity}
                  /></h1>
              </div>
              <p className="text-white">I am a Lebanease based full stack developer focused on NextJS and NodeJS,
                I am passionate about building excellent software</p>
              <div className="d-flex">
                <IconButton href={'/about'} icon={<ArrowForwardIcon />} text={'MORE ABOUT ME'} />
                <IconButton href={'/about'} icon={<FileDownloadOutlinedIcon />} text={'DOWNLOAD CV'} />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
