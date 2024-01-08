import React from 'react'
import { Link } from 'react-router-dom';
import { convertData } from '../constants';
const VideoBanner = ({data}) => {
    const thumbnail = data.snippet.thumbnails;
    return (
        <Link to={"/watch?v=" + data.id.videoId}>
            <div className='p-1 mx-2 my-4 hover:shadow-md hover:shadow-gray-600 hover:bg-gray-50 rounded-md flex'>
                {/* {console.log(data.snippet.thumbnails.maxres)} */}

                <img src={thumbnail.maxres ? thumbnail.maxres.url : (thumbnail.standard ? thumbnail.standard.url : (thumbnail.high ? thumbnail.high.url : (thumbnail.medium ? thumbnail.medium.url : thumbnail.default.url)))} className='rounded-lg h-52 w-80 object-fill' />
                <div className='mx-3'>
                    <h2 className='text-xl font-semibold m-2'>{data.snippet.title}</h2>
                    <h3 className='text-md text-gray-600 my-1 px-1'>{data.snippet.description}</h3>
                    <h3 className='text-sm text-gray-600 px-1 my-1' >{data.snippet.channelTitle}</h3>
                    
                </div>

            </div>
        </Link>
    )
}

export default VideoBanner