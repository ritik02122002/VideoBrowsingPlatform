import React from 'react'

const PlaylistVideosContainerShimmer = () => {
    return (
        <div className=' shadow-gray-300 shadow-md my-3 rounded-lg'>
            <div className='my-2'>
                <div className='p-1 m-2' >
                    <div className='w-72 h-40 bg-gray-100 rounded-lg my-2'></div>
                    <div className='w-72 p-1 bg-gray-100 h-10 my-1'></div>
                    <div className=' bg-gray-100 px-1 h-7' ></div>
                    <div className='bg-gray-100 px-1 h-5 my-1'></div>
                </div>
                <div className='w-64 p-1 bg-gray-100 h-14 my-3 mx-auto rounded-lg'>
                </div>

            </div>
            <div className='w-48 p-1 bg-gray-100 h-8 mx-auto rounded-lg my-5'></div>
            {[...Array(10)].map((a, index) =>
                <div className='m-2  rounded-md flex w-full' key={index}>

                    <div className='rounded-lg h-20 w-36 bg-gray-100 my-2 mx-2 '></div>
                    <div className='mt-2'>
                        <h2 className='h-5  overflow-hidden mx-2 my-1 bg-gray-100 w-20'></h2>
                        <h3 className='h-3 bg-gray-100 mx-2 my-1 w-12' ></h3>
                        <h3 className='h-3 bg-gray-100 mx-2 my-1 w-16'></h3>
                    </div>


                </div>)}
        </div>
    )
}

export default PlaylistVideosContainerShimmer