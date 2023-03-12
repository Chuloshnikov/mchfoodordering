import React from 'react';
import Button from './elements/Button';
import BannerImg from '../assets/images/pizza_banner.png';

export const Banner = () => {
  return (
    <>
    <div className='banner w-full md:w-2/3 px-7 mx-auto relative flex items-center justify-between'>
      <div className='banner-description w-full md:w-1/2 p-3'>
        <h2 className='mb-6 text-4xl font-bold text-[#3F4E2C]'>
          Make ordering food easier
        </h2>
        <p className='font-semibold text-lg text-red-500 py-2'>
          Get Started Today!
        </p>
        <div className='btn-container'>
          <Button>Order Now</Button>
          <a href="/menu" className='text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3'>
            See Menu
          </a>
        </div>
      </div>
      <div className='banner-image w-full md:w-1/2 p-3'>
        <img src={BannerImg} alt="banner" className='max-h-95'/>
      </div>
    </div>
    </>
  )
}

