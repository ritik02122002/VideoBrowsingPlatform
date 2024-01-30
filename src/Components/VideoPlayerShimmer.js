import React from 'react'

const VideoPlayerShimmer = () => {
    return (
        <div className='w-[320px] xs:w-[400px] sm:w-[500px] md:w-[700px] lg:w-[800px] xl:w-[930px] mx-auto'>
            <div className='h-[180px] xs:h-[225px] sm:h-[283px] md:h-[394px] lg:h-[450px] xl:h-[523px] bg-gray-100 my-4 rounded-xl'></div>
            <div className='w-full h-10 bg-gray-100 rounded-md my-2'></div>
            <div className='flex my-2 w-full'>
                <div className='h-10 w-10 rounded-full mr-2 m-1  bg-gray-100' ></div>
                <div>
                    <div className='text-sm p-1 font-semibold w-14 h-5 bg-gray-100 m-1 my-2 rounded-md'></div>
                    <div className='mx-1 w-20 h-3 bg-gray-100 rounded-md'></div>
                </div>
            </div>
            <div className='w-full h-14 bg-gray-100 rounded-md my-4'></div>





        </div>
    )
}

export default VideoPlayerShimmer