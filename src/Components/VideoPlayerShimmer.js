import React from 'react'

const VideoPlayerShimmer = () => {
    return (
        <div>
            <div className='w-[930px] h-[530px] bg-gray-100 my-4 rounded-xl'></div>
            <div className='w-[930px] h-10 bg-gray-100 rounded-md my-2'></div>
            <div className='flex my-2'>
                <div className='h-10 w-10 rounded-full mr-2 m-1  bg-gray-100' ></div>
                <div>
                    <div className='text-sm p-1 font-semibold w-14 h-5 bg-gray-100 m-1 my-2 rounded-md'></div>
                    <div className='mx-1 w-20 h-3 bg-gray-100 rounded-md'></div>
                </div>
            </div>
            <div className='w-[930px] h-14 bg-gray-100 rounded-md my-4'></div>





        </div>
    )
}

export default VideoPlayerShimmer