import { useEffect } from 'react'
import { DEFAULT_LIVEVIDEO_QUERY_STRING, SEARCH_API_URL } from '../constants'
import { getCompleteUrl } from "../helper";
import VideoCard from './VideoCard';
import VideoCardShimmer from './VideoCardShimmer';
import { useDispatch, useSelector } from 'react-redux';
import { addLiveVideoData } from '../utility/liveVideoSlice';

const LiveVideo = () => {
  const liveVideo = useSelector(store => store.liveVideo.data);

  const dispatch = useDispatch();

  const getLiveVideoData = async (url) => {
    const data = await fetch(url);
    const jsondata = await data.json();
    console.log(jsondata)
    dispatch(addLiveVideoData(jsondata))


  }

  useEffect(() => {

    if (liveVideo == null) {

      getLiveVideoData(getCompleteUrl(SEARCH_API_URL, {
        type: "video",
        order: "relevance",
        videoDuration: "any",
        q: DEFAULT_LIVEVIDEO_QUERY_STRING,
        eventType: "live",
        maxResults: "1"
      }))


    }

  }, [])



  return (
    liveVideo ?
      (liveVideo.items.map((video) => <VideoCard thumbnail={video?.snippet?.thumbnails} duration={video?.contentDetails?.duration} title={video?.snippet?.title} channelTitle={video?.snippet?.channelTitle} viewCount={video?.statistics?.viewCount} publishedAt={video?.snippet?.publishedAt} id={video?.id?.videoId} isLive={true} key={video?.id} />))
      :
      <VideoCardShimmer />
  )
}

export default LiveVideo