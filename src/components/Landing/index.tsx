import React from 'react'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"

function index() {
    return (
        <div className='bg-gray-200 rounded-lg flex flex-wrap gap-2 h-[100vh] mt-10'>
            {/* <div className="flex-col h-[100vh] w-1/2  flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                    <h1 className="text-4xl md:text-7xl font-bold text-center">
                        Donate for a Cause
                    </h1>
                    <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quidem molestiae eveniet ipsa vel tempore commodi odio nobis nesciunt, error odit, nam quo dolorem neque aut delectus voluptatem distinctio. Explicabo.
                    </p>
                </div>
                <div className='flex gap-4'>
                    <Button>Donate</Button>
                    <Button>Dashboard</Button>
                </div>
            </div> */}
            <div className='flex-col flex-1 flex items-center justify-center md:p-4 p-2'>
                <h1 className="text-4xl md:text-7xl font-bold text-center">
                    Donate for a Cause
                </h1>
                <p className="mt-4 mb-2 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quidem molestiae eveniet ipsa vel tempore commodi odio nobis nesciunt, error odit, nam quo dolorem neque aut delectus voluptatem distinctio. Explicabo.
                </p>
                <div className='flex gap-4'>
                    <Button>Donate</Button>
                    <Button>Dashboard</Button>
                </div>
            </div>
            <div className=' flex flex-1 items-center justify-center md:w-auto'>
                <img
                    src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Photo by Drew Beamer"
                    className="rounded-md object-cover max-h-96 max-w-96"
                />
            </div>
        </div>
    )
}

export default index