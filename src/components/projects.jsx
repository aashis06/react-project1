import React, { useState, useEffect } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCards, setShowCards] = useState(1);
    useEffect(() => {
        const updateCards = () => {
            if(window.innerWidth >=1024) {
                setShowCards(projectsData.length)
            } else {
                setShowCards(1)
        }
        }
        updateCards()
        window.addEventListener('resize', updateCards)
        return () => {
            window.removeEventListener('resize', updateCards)
        }
},[])
    const nextCard = () => {
        setCurrentIndex((prevIndex)=> (prevIndex+1)% projectsData.length)
    }
    const previousCard = () => {
        setCurrentIndex((prevIndex)=> prevIndex===0 ? projectsData.length-1 : prevIndex-1)
    }
    return (
        <div className='container mx-auto text-center py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 overflow-hidden' id='Project'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2  text-center text-gray-900'>Projects <span className='underline underline-offset-4 decoration-1 under text-blue-500'>Under Construction</span></h1>
            <p className='text-gray-600 max-w-80 text-center mb-4 mx-auto'>Coming soon...</p>
            {/* slider buttons */}
            <div className='flex justify-end items-center gap-4 mb-4 right-0'>
                <button onClick={previousCard} className='bg-white text-black py-2 px-4 rounded-full cursor-pointer' aria-label='previous project'>
                    <img src={assets.left_arrow} alt=" previous project" />
                </button>
                <button onClick={nextCard} className='bg-white text-black py-2 px-4 rounded-full cursor-pointer' aria-label='next project'>
                    <img src={assets.right_arrow} alt=" next project" />
                </button>
            </div>
            {/* project slider container */}
            <div className='overflow-hidden'>
                <div className='flex gap-4 transition ease-in-out duration-500 ' style={{transform: `translateX(-${(currentIndex*100)/showCards}%)`}}>
                    {projectsData.map((project, index)=>(
                        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <img src={project.image} alt={project.title} className='w-full h-auto' />
                            <div className='absolute top-0 left-0 right-0 bottom-5 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-75 transition-opacity duration-300  cursor-pointer'>
                                <div className='text-center inline-block'>
                                <h2 className='text-white text-xl  font-bold '>{project.title}</h2>
                                <p className='text-white text-sm mt-2'>{project.price}</p>
                                <p className='text-white text-sm mt-2'>{project.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
