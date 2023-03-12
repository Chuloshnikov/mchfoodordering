import React from 'react';
import logoImg from '../assets/icons/pizza.png';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
  return (
    <nav id='header' className='bg-[#F3F3E3] text-black'>
        <div className='container w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
            <div className='logo-wrapper pl-4'>
                <Link className='no-underline lg:text-4xl flex items-center' to="/">
                    <img className='w-[32px] h-[32px] object-cover' src={logoImg} alt="logo"/>
                    <span className='font-bold text-[#BD5B1E]'>MCH</span>
                </Link>
            </div>
            <div className='nav-menu-wrapper flex items-center justify-between space-x-10'>
                <Link className='text-xl' to="/">Home</Link>
                <Link className='text-xl' to="#about">About</Link>
            </div>
            <div className='flex items-center justify-center space-x-4 pr-4'>
                <Link to="/cart">
                    <AiOutlineShoppingCart className='w-[28px] h-[28px] object-cover'/>
                </Link>
                <Link to="/login">Log In</Link>
                <Link to="/register">Sign Up</Link>
            </div>
        </div>
    </nav>
  )
}

export default Header;