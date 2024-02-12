import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function index() {
    return (
        <div>
            <div className='bg-gray-300 py-16 rounded-lg p-4 mt-10 flex w-full items-center justify-center gap-6 flex-wrap'>
                <div>
                    {/* Heading */}
                    <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                        What makes us Different
                    </h2>

                    <div className='flex flex-col space-y-4 m-10'>
                        <div className='flex gap-2 space-2 justify-center'>
                            {/* Stat 1 */}
                            <Card className='w-32 h-32 flex items-center flex-col justify-center'>
                                <CardTitle>80k+</CardTitle>
                                <CardDescription>Enrolled in our courses</CardDescription>
                            </Card>
                            {/* Stat 2 */}
                            <Card className='w-32 h-32 flex items-center flex-col justify-center'>
                                <CardTitle>80k+</CardTitle>
                                <CardDescription>Enrolled in our courses</CardDescription>
                            </Card>
                        </div>
                        <div className='flex gap-2 space-2 justify-center'>
                            {/* Stat 3 */}
                            <Card className='w-32 h-32 flex items-center flex-col justify-center'>
                                <CardTitle>80k+</CardTitle>
                                <CardDescription>Enrolled in our courses</CardDescription>
                            </Card>
                            {/* Stat 4 */}
                            <Card className='w-32 h-32 flex items-center flex-col justify-center'>
                                <CardTitle>80k+</CardTitle>
                                <CardDescription>Enrolled in our courses</CardDescription>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className=' flex items-center justify-center md:w-auto'>
                    <img
                        src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Photo by Drew Beamer"
                        className="rounded-md object-cover h-96 w-96"
                    />
                </div>


            </div>
        </div>
    )
}

export default index