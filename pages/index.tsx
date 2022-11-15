import { SpeedDialIcon } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'


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
        <div className="flex flex-1 items-center justify-center text-center w-sreen h-[620px] bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url(/images/bg_content.png)"}}>
          <div className="flex flex-col items-center justify-center gap-6 h-full self-center">
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
            <video className='border block md:hidden' >
              <source src='/videos/video.mp4' type='video/mp4' />
            </video>
            <div className="flex flex-row flex-wrap items-center justify-center gap-12 max-w-4xl">
              <div className='flex flex-col gap-3 w-48 items-center justify-center text-center'>
                <SpeedDialIcon className='text-blue-600'/>
                <p className='text-lg font-bold'>OpenType features Variable Fonts</p>
                <p>Slate helps you see how many more days you need to work to reach yout financial goal</p>
              </div>
              <div className='flex flex-col gap-3 w-48 items-center justify-center text-center'>
                <SpeedDialIcon className='text-blue-600' />
                <p className='text-lg font-bold'>Design with real data</p>
                <p>Slate helps you see how many more days you need to work to reach yout financial goal</p>
              </div>
              <div className='flex flex-col gap-3 w-48 items-center justify-center text-center'>
                <SpeedDialIcon className='text-blue-600' />
                <p className='text-lg font-bold'>Fastest way to take action</p>
                <p>Slate helps you see how many more days you need to work to reach yout financial goal</p>
              </div>
            </div>
            <video className='border hidden md:block' >
              <source src='/videos/video.mp4' type='video/mp4' />
            </video>
          </section>
        </div>
      </div>
    </div>
  )
}
