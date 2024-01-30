import React from 'react'
import { Link } from 'react-router-dom';
import { convertVideoDuration, convertDateTime } from "../helper";
import { convertData } from "../helper";
const VideoCard = ({ thumbnail, duration, title, channelTitle, viewCount, publishedAt, id, isLive }) => {

  return (
    <Link to={"/watch?v=" + id}>
      <div className='p-1 m-2 hover:shadow-md hover:shadow-gray-600 hover:bg-gray-50 rounded-md relative'>

        <img src={thumbnail?.maxres ? thumbnail?.maxres?.url : (thumbnail?.standard ? thumbnail?.standard?.url : (thumbnail?.high ? thumbnail?.high?.url : (thumbnail?.medium ? thumbnail?.medium?.url : thumbnail?.default?.url)))} alt='video thumbnail' className='rounded-lg h-40 w-72 items-stretch bg-gray-100' />
        <h3 className='text-xs px-2  absolute top-32 right-1 bg-white my-4 mx-1 rounded-md font-semibold'>{(duration && convertVideoDuration(duration)) || (isLive && <span className='text-red-700 font-bold'>LIVE</span>)}</h3>
        <h2 className='text-base font-semibold overflow-hidden w-72 p-1 line-clamp-2'>{title}</h2>
        <h3 className='text-sm text-gray-600 px-1 w-72 line-clamp-1' >{channelTitle}</h3>
        <h3 className='text-sm text-gray-600 px-1 my-1'>{viewCount && convertData(viewCount) + " views"}<span className={viewCount && 'ml-3'}><i className="fa fa-calendar mx-1"></i>{publishedAt && convertDateTime(publishedAt)}</span></h3>



      </div>
    </Link>
  )
}

export default VideoCard