import React from 'react'
import CarouselDemo from '../Carousel';

// Rest of the code...
function index() {
    return (
        <div className='bg-gray-300 py-16 rounded-lg p-4 mt-10'>
            {/* Heading */}
            <h2 className="mt-10 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Enlightening + Thriving Course
            </h2>

            {/* Description */}
            <p className="leading-7 [&:not(:first-child)]:m-4">

                This is the best time to revive our culture. Today many people are interested to learn our vedic culture,
                it's philosophy and science.
                But very few authentic and expert sources are available Gita Quest is one of them.
            </p>
            {/* Testimony */}
            <div className='flex items-center justify-center'>
                <CarouselDemo />
            </div>
        </div>
    )
}

export default index