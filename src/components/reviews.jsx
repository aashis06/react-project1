import React from 'react'
import { assets,ReviewsData } from '../assets/assets'

const Review = ()=> {
    return (
        <div className='flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden ' id='reviews'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center text-gray-900'>customer <span className='underline underline-offset-4 decoration-1 under text-blue-500'>recommendation</span></h1>
        <p className='text-gray-600 max-w-80 text-center mb-4 mx-auto'>Review from those who have worked with us </p>
        <div className='flex flex-wrap justify-center gap-8'>
        {ReviewsData.map((review, index) =>(
            <div key={index} className='max-w-[340px] border-2 border-gray-200 shadow-lg rounded px-8 py-12 text-center'>
                <img src={review.image} alt={review.name} className='w-20 h-20 rounded-full mx-auto mb-4' />
                <h3 className='text-xl font-bold text-gray-900 mt-4'>{review.name}</h3>
                <p className='text-gray-600 mt-2'>{review.title}</p>
                <div className='flex justify-center gap-2 mt-4'>
                    {Array.from({length: review.rating}, (item, index) => (
                      <img key={index} src={assets.star_icon} alt="" />  
                    ))}
                </div>
                <p className='text-gray-600 mt-2'>{review.text}</p>
            </div>

        ))}
        </div>
        </div>
    )
}

export default Review
