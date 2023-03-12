import React from 'react'
import aboutImg from '../assets/images/about-image.png';

export const About = () => {
  return (
    <div className='bg-white'>
        <div className='p-24 grid grid-cols-2'>
            <div className=''>
                <h2 className='text-2xl font-medium '>About Us</h2>
                <p className='text-lg'>
                Welcome to our food ordering site, where delicious food and convenience come together. 
                We are dedicated to providing our customers with the best possible experience, whether 
                they are looking for a quick and easy meal or a special occasion feast.
                Our team of culinary experts works tirelessly to create a menu that is both diverse and delicious, 
                featuring a wide variety of dishes to suit every taste and dietary preference. 
                From classic comfort foods to exotic and adventurous flavors, we have something for everyone. 
                We understand that life can be busy, which is why we offer a range of ordering and delivery options 
                to make your experience as convenient as possible. Whether you prefer to order online, by phone, 
                or through our mobile app, we make it easy to get the food you love when and where you need it.
                At our food ordering site, we believe that great food should be accessible to everyone, 
                which is why we are committed to using only the freshest, highest-quality ingredients in all of our dishes. 
                From locally-sourced produce to sustainably-raised meats and seafood, we take pride in offering 
                food that is both delicious and ethically-sourced. Thank you for choosing our food ordering site 
                for your dining needs. We look forward to serving you and making your next meal an unforgettable experience.
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <img src={aboutImg} alt="aboutImage" className='w-[400px] h-[400px] object-cover'/>
            </div>
        </div>
    </div>
  )
}

