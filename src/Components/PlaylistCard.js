import React from 'react'
import { Link } from 'react-router-dom';
import { MAX_PLAYLIST_VIDEOS } from '../constants';
import { convertDateTime } from "../helper";
import { convertData } from "../helper";
import PLAYLIST_ICON from '../assets/playlist_icon.png'

const PlaylistCard = ({ thumbnail, title, channelTitle, viewCount, publishedAt, id, itemCount, includeLink }) => {

  return (
    <Link to={includeLink ? id : ""}>
      <div className='p-1 m-2 rounded-md relative group hover:px-3 hover:py-3 w-max h-max'>

        <img src={thumbnail?.maxres ? thumbnail?.maxres?.url : (thumbnail?.standard ? thumbnail?.standard?.url : (thumbnail?.high ? thumbnail?.high?.url : (thumbnail?.medium ? thumbnail?.medium?.url : thumbnail?.default?.url)))} alt="playlist thumbnail" className='rounded-lg h-40 w-72 items-stretch group-hover:h-36 group-hover:w-64 bg-gray-100' />
        <div className='text-sm px-2  absolute top-28 right-1 bg-white my-4 mx-1 rounded-md flex py-1 '><img src={PLAYLIST_ICON} className='h-6 w-max px-1' alt="items count"/><span className='font-semibold'> {Math.min(itemCount, MAX_PLAYLIST_VIDEOS)} videos </span></div>
        <h2 className='text-base font-semibold overflow-hidden w-72 p-1 line-clamp-2 group-hover:w-64 group-hover:text-sm'>{title}</h2>
        <h3 className='text-sm text-gray-600 px-1 line-clamp-1' >{channelTitle}</h3>
        <h3 className='text-sm text-gray-600 px-1 my-1'>{viewCount && convertData(viewCount) + " views"}<span className={viewCount && 'ml-3'}><i className="fa fa-calendar mx-1"></i>{publishedAt && convertDateTime(publishedAt)}</span></h3>



      </div>
    </Link>
  )
}

export default PlaylistCard