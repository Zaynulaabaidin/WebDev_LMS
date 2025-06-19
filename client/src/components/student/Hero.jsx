import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:p-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>

      <h1 className='relative md:text-home-heading-large text-home-heading-small font-bold text-gray-800 max-w-3xl mx-auto'> Empower your future with the courses designed to
        <span className='text-blue-600'> fit your choice.</span>
        <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' />
      </h1>

      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>
        We bring together world-class instructions, interactive content, and a supportive community to help you achieve your learning goals. Whether you're looking to upskill, change careers, or simply explore new interests, our platform has something for everyone.
      </p>

      <p className='md:hidden block text-gray-500 max-w-sm mx-auto'>
        We bring together world-class instructions, to help you achieve your professional goals.
      </p>
      <SearchBar />
    </div>
  )
}

export default Hero