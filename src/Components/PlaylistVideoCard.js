import React from 'react'
import { Link } from 'react-router-dom';
import { convertDateTime } from "../helper";
import { convertData } from "../helper";

const PlaylistVideoCard = ({ thumbnail, title, channelTitle, viewCount, publishedAt, id }) => {
  return (
    <Link to={"/watch?v=" + id}>
      <div className='p-1 m-2 hover:shadow-md hover:shadow-gray-600 hover:bg-gray-50 rounded-md relative flex w-full'>

        <img src={thumbnail?.maxres ? thumbnail?.maxres?.url : (thumbnail?.standard ? thumbnail?.standard?.url : (thumbnail?.high ? thumbnail?.high?.url : (thumbnail?.medium ? thumbnail?.medium?.url : thumbnail?.default?.url)))} alt="video thumbnail" className='rounded-lg h-20 w-36 items-stretch bg-white' />
        <div>
          <h2 className='text-sm font-semibold overflow-hidden px-2 line-clamp-2'>{title}</h2>
          <h3 className='text-xs text-gray-600 px-2 line-clamp-1' >{channelTitle}</h3>
          <h3 className='text-xs text-gray-600 px-2 my-1'>{viewCount && convertData(viewCount) + " views"}<span className={viewCount && 'ml-3'}><i className="fa fa-calendar mx-1"></i>{publishedAt && convertDateTime(publishedAt)}</span></h3>
        </div>


      </div>
    </Link>
  )
}

export default PlaylistVideoCard