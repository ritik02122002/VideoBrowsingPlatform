import React from 'react'

const CommentsShimmer = () => {
  return (
    <div>
      {[...Array(10)].map((element, indx) => (<div className='my-4' key={indx}>
        <div className='flex m-2'>
          <div className='h-8 w-8 rounded-full mr-2 m-1  bg-gray-100' ></div>
          <div>
            <div className='text-sm p-1 font-semibold w-20 h-4 bg-gray-100 m-1 my-2 rounded-md'></div>
            <div className='mx-1 w-60 h-3 bg-gray-100 rounded-md'></div>
          </div>
        </div>

      </div>)
      )}
    </div>
  )
}

export default CommentsShimmer