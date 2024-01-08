import React, { useState } from 'react'
import VideoCard from './VideoCard'
import VideoCardShimmer from './VideoCardShimmer';
import useVideosList from '../utility/useVideosList';
import { API_KEY, VIDEOS_LIST_API_URL } from '../constants';
import useDataList from '../utility/useDataList';

const VideoContainer = () => {
    const [pageToken,setPageToken]=useState(null);
    // const [videoList, setVideoList] = useVideosList(pageToken);
    const [videoList, setVideoList] =useDataList(VIDEOS_LIST_API_URL,{pageToken:pageToken},[pageToken]);
    return (videoList==null?
        <VideoCardShimmer/>
        :
        <div>
        <div className='flex justify-around'>
        <button className='text-xl bg-gray-100 rounded-sm px-3 py-1 m-3' onClick={()=>{
            
            setPageToken(videoList.prevPageToken);
        }}>Prev</button>
        <button className='text-xl bg-gray-100 rounded-sm px-3 py-1 m-3' onClick={()=>{
            console.log(videoList)
            setPageToken(videoList.nextPageToken);
        }}>Next</button>
        </div>
        <div className='flex flex-wrap justify-center'>
            {
                videoList.items.map(video => (video!=undefined?<VideoCard data={video} key={video.id}/>:null))
            }
        </div>
        
        </div>
    )
}

export default VideoContainer