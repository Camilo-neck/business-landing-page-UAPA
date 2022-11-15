// MUI Icons
import { SpeedDialIcon } from '@mui/material'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// MUI Socials
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Next imports
import Head from 'next/head'
import Image from 'next/image'

// My components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Business Landing Page</title>
        <meta name="description" content="UI Layout design UAPA Solicitude" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <div className="flex flex-1 items-center justify-center text-center w-sreen h-[640px] bg-center bg-cover bg-no-repeat clip-path" style={{backgroundImage: "url(/images/header-bg.jpg)"}}>
          <div className="flex flex-col w-full items-center justify-center gap-6 h-full self-center backdrop-brightness-50">
            <h1 className="text-5xl font-bold text-white w-auto md:w-[30rem]">The best products start with Figma</h1>
            <p className="text-white text-md tracking-widest font-light w-auto md:w-[35rem]">Most calendars are designed for teams. Slate is designed for freelancers</p>
            <button className="px-8 py-2 mt-4 text-white bg-blue-500 rounded-full">Try For Free</button>
          </div>
        </div>
        <div className="main">
          <section
          id="features"
          className="flex flex-col gap-y-10 items-center justify-center w-full"
          >
            <div className='text-center max-w-md flex flex-col gap-6'>
                <p className="text-3xl text-gray-800">Features</p>
                <div className="p-2 px-8">
                  <p>Most calendars are designed for teams. Slate is designed for freelancers</p>
                </div>
            </div>
            <video className='border block md:hidden rounded-lg w-72 sm:w-[40rem] drop-shadow-lg' >
              <source src='/videos/movie.mp4' type='video/mp4' />
            </video>
            <div className="flex flex-row flex-wrap items-center justify-center gap-12 max-w-4xl">
              <div className='flex flex-col gap-3 w-48 items-center justify-center text-center'>
                <Image src={'/images/figures.svg'} alt='Figures' width={40} height={40} />
                <p className='text-lg font-bold'>OpenType features Variable Fonts</p>
                <p>Slate helps you see how many more days you need to work to reach yout financial goal</p>
              </div>
              <div className='flex flex-col gap-3 w-48 items-center justify-center text-center'>
                <Image src={'/images/pencil.svg'} alt='Figures' width={40} height={40} />
                <p className='text-lg font-bold'>Design with real data</p>
                <p>Slate helps you see how many more days you need to work to reach yout financial goal</p>
              </div>
              <div className='flex flex-col gap-3 w-48 items-center justify-center text-center'>
                <Image src={'/images/brush.svg'} alt='Figures' width={40} height={40} />
                <p className='text-lg font-bold'>Fastest way to take action</p>
                <p>Slate helps you see how many more days you need to work to reach yout financial goal</p>
              </div>
            </div>
            <video controls className='border hidden md:block rounded-lg w-[45rem] xl:w-[50rem] drop-shadow-lg' >
              <source src='/videos/movie.mp4' type='video/mp4' />
            </video>
          </section>
          <section
          id="contact"
          className="flex flex-col gap-y-10 items-center justify-center w-full mt-10">
            <div className='text-center max-w-md flex flex-col gap-6'>
                <p className="text-3xl text-gray-800">Contact Us</p>
                <div className="p-2 px-8">
                  <p>Most calendars are designed for teams. Slate is designed for freelancers</p>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-col lg:flex-row gap-10'>
              <form className='flex flex-col gap-5 w-fit px-7 items-center justify-center p-5 border border-gray-300 rounded-lg shadow-lg self-center'>
                <p className='font-semibold'>Contact Us</p>
                <div className='flex flex-col gap-8 w-72'>
                  <input className='border-2 bg-gray-100 rounded-full p-2' type='text' placeholder='Name' />
                  <input className='border-2 bg-gray-100 rounded-full p-2' type='email' placeholder='Email' />
                  <textarea className='border-2 bg-gray-100 rounded-md p-2 h-48' placeholder='Message' />
                  <button className='bg-blue-500 text-white rounded-full p-2 px-8 w-fit'>Send</button>
                </div>
              </form>
              <div className='flex flex-col-reverse md:flex-col gap-10 max-w-xl px-4'>
                <div className='flex flex-col md:flex-row gap-5'>
                  <div className='flex flex-row md:flex-col gap-2 md:justify-center items-center text-center'>
                    <LocationOnRoundedIcon className='text-blue-600' />
                    <p className='font-light'>6386 Spring St undefined Anchorage, Georgia 12473 United States</p>
                  </div>
                  <div className='flex flex-row md:flex-col gap-2 md:justify-center items-center text-center min-w-fit'>
                    <PhoneAndroidOutlinedIcon className='text-blue-600' />
                    <p className='font-light'>(843) 555-0130</p>
                  </div>
                  <div className='flex flex-row md:flex-col gap-2 md:justify-center items-center text-center'>
                    <EmailOutlinedIcon className='text-blue-600' />
                    <p className='font-light'>willie.jennings@example.com</p>
                  </div>
                </div>
                <div className='w-full items-center justify-center md:flex hidden'>
                  <iframe className='w-[30rem] h-80' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.584497015554!2d-73.985683684738!3d40.74844097932676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25903ebe8a8c3%3A0x4f4c8f6ae1735f4f!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1634041000000!5m2!1sen!2sbd" style={{border:0}} loading="lazy"></iframe>
                </div>
                <div className='flex flex-row gap-3 text-blue-600'>
                  <TwitterIcon />
                  <FacebookIcon />
                  <LinkedInIcon />
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  )
}
