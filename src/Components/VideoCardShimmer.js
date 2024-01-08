import React from 'react'

const VideoCardShimmer = () => {
    return (
        <div className='flex flex-wrap justify-center'>

            {[...Array(20)].map((e, i) =>
                <div className='p-1 m-2' key={i}>
                    <div className='w-72 h-40 bg-gray-100 rounded-lg my-2'></div>
                    <div className='w-72 p-1 bg-gray-100 h-10 my-1'></div>
                    <div className=' bg-gray-100 px-1 h-7' ></div>
                    <div className='bg-gray-100 px-1 h-5 my-1'></div>
                </div>)}


        </div>
    )
}

export default VideoCardShimmer