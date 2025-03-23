import React from 'react'
import Navbar from './navbar'

const Header = () => {
    return (
        <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
           < Navbar/>
           <div className='container mx-auto text-center py-4 px-6 md:px-20 lg:px-32  text-white'>
            <h2 className='text-6xl sm:text-6xl md:text-[80px] inline-block max-w-3xl font-bold'>Discover Your Dream Home</h2>
            <div className=' space-x-6 mt-16'>
                <a href="#Project" className='border border-white py-2 px-4 rounded'>Projects</a>
                <a href="#Contact" className='bg-blue-500 py-2 px-4 rounded'>Contact Us</a>
            </div>
           </div>
        </div>
    )
}

export default Header
