import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden ' id='About'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-gray-900'>About <span className='underline underline-offset-4 decoration-1 under text-blue-500'>My Page</span></h1>
            <p className='text-gray-600 max-w-80 text-center mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
                <div className='flex flex-col items-center md:items-start mt-10 md:gap-4 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-26'>
                        <div>
                            <p className='text-3xl font-bold text-gray-900'>10+</p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className='text-3xl font-bold text-gray-900'>12+</p>
                            <p>Projects completed</p>
                        </div>
                        <div>
                            <p className='text-3xl font-bold text-gray-900'>20+</p>
                            <p>mn. of satisfied clients</p>
                        </div>
                        <div>
                            <p className='text-3xl font-bold text-gray-900'>30+</p>
                            <p>Properties for sale</p>
                        </div>
                    </div>
                    <p className='text-gray-600 text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    <button className='bg-blue-500 text-white py-2 px-4 rounded mt-4' >Learn More</button>
                </div>
            </div>

        </div>
    )
}

export default About
