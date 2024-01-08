import React, { useState } from 'react'
import { SEARCH_ICON_URL } from '../constants'
import { Link } from 'react-router-dom'

const Search = () => {
  const [searchTxt,setSearchTxt]=useState("");
  return (
    <div className='flex'>
        <input type="text" className='w-20 h-9 2xl:w-[600px] xl:w-[500px] lg:w-96 md:w-56 sm:w-40 border-gray-300 border-2 rounded-l-full p-2 pl-5 text-gray-700 focus:border-blue-600 focus:border-2 outline-none' placeholder='Search' value={searchTxt} onChange={
          (e)=>{setSearchTxt(e.target.value)}
        }></input>
        {/* {console.log(document.getElementsByClassName("searchInput")[0])} */}
        <Link to={"/results?search_query="+searchTxt}><button className='h-9 border-gray-300 border-2 rounded-r-full border-l-0 p-2 px-5 bg-gray-50 hover:bg-gray-100'><img className="h-4" src={SEARCH_ICON_URL} /></button></Link>
    </div>
  )
}

export default Search