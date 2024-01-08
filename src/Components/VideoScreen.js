import React,{useEffect} from 'react'
import VideoPlayer from './VideoPlayer'
import Comment from './Comment'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { collapseScrollbar } from '../utility/menuSlice';
import useVideoAndChannelData from '../utility/useVideoAndChannelData';
import VideoPlayerShimmer from './VideoPlayerShimmer'


const VideoScreen = () => {
    const [videoId] = useSearchParams();
    const [vData, setVData, channelData, setChannelData] = useVideoAndChannelData(videoId.get("v"));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(collapseScrollbar());
        console.log("hi");
    }, [])


  return ((vData && channelData) ?
    <div className='w-[930px]'>
        <VideoPlayer vData={vData} channelData={channelData} videoId={videoId.get("v")}/>
        <Comment videoId={videoId.get("v")} numComments={vData.items[0].statistics.commentCount}/>
    </div>
    :
    <VideoPlayerShimmer />
  )
}

export default VideoScreen