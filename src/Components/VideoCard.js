import React from 'react'
import { Link } from 'react-router-dom';
import { convertData } from '../constants';
const VideoCard = ({ data }) => {
  // console.log(data);
  const thumbnail=data.snippet.thumbnails;
  return (
    <Link to={"/watch?v=" + data.id}>
      <div className='p-1 m-2 hover:shadow-md hover:shadow-gray-600 hover:bg-gray-50 rounded-md'>
        {/* {console.log(data.snippet.thumbnails.maxres)} */}
       
        <img src={thumbnail.maxres? thumbnail.maxres.url:(thumbnail.standard?thumbnail.standard.url:(thumbnail.high?thumbnail.high.url:(thumbnail.medium?thumbnail.medium.url:thumbnail.default.url)))} className='rounded-lg h-40 w-72 items-stretch' />
    
        <h2 className='text-md font-semibold overflow-hidden w-72 p-1'>{data.snippet.title}</h2>
        <h3 className='text-sm text-gray-600 px-1' >{data.snippet.channelTitle}</h3>
        <h3 className='text-sm text-gray-600 px-1'>{convertData(data.statistics.viewCount)} views</h3>


      </div>
    </Link>
  )
}

export default VideoCard