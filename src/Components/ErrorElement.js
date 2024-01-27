import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const ErrorElement = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className='w-max mx-auto my-6'>
            <h1 className='text-xl font-semibold w-max m-auto my-2'>Opps! Something went wrong</h1>
            <h2 className='text-2xl  w-max m-auto my-2'>{error.status} {error.statusText}</h2>

            <Link to="/" className=' hover:bg-gray-700 outline-2 outline-black outline-offset-2 outline w-max mx-auto block px-3 py-1 my-4 hover:text-white'><button className='w-max m-auto '>Home</button></Link>

        </div>
    )
}

export default ErrorElement