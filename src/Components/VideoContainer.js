import VideoCard from './VideoCard'
import VideoCardShimmer from './VideoCardShimmer';
import useDataList from '../utility/useDataList';
import LiveVideo from './LiveVideo';

const VideoContainer = ({ VIDEOS_LIST_API_URL, includeLiveVideo, type, dependency }) => {
    console.log(VIDEOS_LIST_API_URL)
    const [videoList] = useDataList(VIDEOS_LIST_API_URL, {}, [...(dependency != null ? dependency : [])]);
    console.log(videoList);
    return (videoList == null ?
        <VideoCardShimmer />
        :
        <div>

            <div className='flex flex-wrap justify-center py-3'>
                {includeLiveVideo && <LiveVideo />}
                {
                    videoList?.items?.map(video => (video != undefined ? <VideoCard thumbnail={video?.snippet?.thumbnails} duration={video?.contentDetails?.duration} title={video?.snippet?.title} channelTitle={video?.snippet?.channelTitle} viewCount={video?.statistics?.viewCount} publishedAt={video?.snippet?.publishedAt} isLive={false} key={((type == "video") || (type == "playlist")) ? (video?.id) : (video?.snippet?.resourceId?.videoId)} id={((type == "video") || (type == "playlist")) ? (video?.id) : (video?.snippet?.resourceId?.videoId)} /> : null))
                }
            </div>

        </div>
    )
}

export default VideoContainer