import React from 'react'

const SearchResultsShimmer = () => {
    return (
        <div>
            {[...Array(10)].map((item, indx) =>
                <div className='m-4 w-full' key={indx}>

                    <div className='flex rounded-md w-[calc(100vw-40px)] sm:w-[calc(100vw-330px)] flex-col xs:flex-row'>
                        <div className='rounded-lg h-40 w-64 md:h-52 md:w-80 bg-gray-100'></div>
                        <div className='mx-3 w-full'>
                            <h2 className='h-5 md:h-6 lg:h-8 xl:h-10 my-3 px-1 w-20 rounded-md bg-gray-100'></h2>
                            <h3 className='h-3 md:h-5 bg-gray-100 px-1 my-1 w-24 rounded-md' ></h3>
                            <h3 className='h-3 md:h-5 bg-gray-100 my-1 px-1 w-40 rounded-md'></h3>

                            <h3 className='h-3 md:h-5 bg-gray-100 px-1 my-1 w-20 rounded-md' ></h3>


                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchResultsShimmer