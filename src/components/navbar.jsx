import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [showMenu, setMenu]= useState(false);
    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    },[showMenu])
    return (
        <div className='absolute top-0 left-0 w-full z-20'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
                <img src={assets.logo} alt="Logo" className='h-10' />
                <ul className='hidden md:flex gap-7 text-white'>
                    <a  href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href="#Project" className='cursor-pointer hover:text-gray-400'>Projects</a>
                    <a href="#reviews" className='cursor-pointer hover:text-gray-400'>Reviews</a>
                </ul>
                <button className='hidden md:block bg-white text-black py-2 px-4 rounded-full cursor-pointer'>Sign Up</button>
                <img onClick={() => setMenu(true)} src= {assets.menu_icon} className='md:hidden cursor-pointer w-8' alt="" />
            </div>
            {/* mobile-menu */}
            <div className={`md:hidden ${showMenu ? 'fixed w-full': 'hidden'}  top-0 right-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div>
                    <img onClick={() => setMenu(false)} src= {assets.cross_icon} className='w-8 absolute top-4 right-4 cursor-pointer' alt="" />
                </div>
                <ul className='flex flex-col items-center justify-center gap-3 text-black mt-7 px-4 text-lg font-medium '>
                    <a onClick={() => setMenu(false)} href="#Header" className='px-4 py2 rounded-full inline-block cursor-pointer'>Home</a>
                    <a onClick={() => setMenu(false)} href="#About" className='px-4 py2 rounded-full inline-block cursor-pointer'>About</a>
                    <a onClick={() => setMenu(false)} href="#Project" className='px-4 py2 rounded-full inline-block cursor-pointer'>Projects</a>
                    <a onClick={() => setMenu(false)} href="#reviews" className='px-4 py2 rounded-full inline-block cursor-pointer'>Reviews</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
