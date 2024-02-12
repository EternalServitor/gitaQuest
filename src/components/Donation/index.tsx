import React from 'react'
import ProductCard from '../Cards';

// Rest of the code...
function index() {
    return (
        <div className='bg-gray-300 py-16 rounded-lg p-4 mt-10'>
            {/* Heading */}
            <h2 className="mt-10 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                General Donation
            </h2>

            {/* Description */}
            <p className="leading-7 [&:not(:first-child)]:m-4">
                Providing any of these essential donations will boost our
                efforts to provide free Bhagvat Gita Course to everyone
            </p>
            {/* Cards */}
            <div className='flex items-center justify-center gap-4 flex-wrap'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default index