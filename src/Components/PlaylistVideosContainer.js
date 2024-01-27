import { MAX_PLAYLIST_VIDEOS, PLAYLIST_API_URL, PLAYLIST_VIDEOS_API_URL } from '../constants';
import useDataList from '../utility/useDataList';
import PlaylistCard from './PlaylistCard';
import { useParams } from 'react-router-dom';
import PlaylistVideoCard from './PlaylistVideoCard';
import PlaylistVideosContainerShimmer from './PlaylistVideosContainerShimmer';


const PlaylistVideosContainer = () => {
    const playlistId = useParams();
    const [playlistData] = useDataList(PLAYLIST_API_URL, { id: playlistId?.pid }, [playlistId]);
    const [playlistVideosData] = useDataList(PLAYLIST_VIDEOS_API_URL, { playlistId: playlistId?.pid }, [playlistId]);

    return ((playlistVideosData == null || playlistData == null) ?
        <PlaylistVideosContainerShimmer />
        :

        <div className='bg-gray-100 shadow-lg shadow-gray-100 h-max px-1 py-3 rounded-md my-5'>
            <div className='w-max mx-auto'>
                {playlistData?.items?.map((video) => <PlaylistCard thumbnail={video?.snippet?.thumbnails} duration={video?.contentDetails?.duration} title={video?.snippet?.title} channelTitle={video?.snippet?.channelTitle} viewCount={video?.statistics?.viewCount} publishedAt={video?.snippet?.publishedAt} isLive={false} key={video?.id} id={video?.id} itemCount={video?.contentDetails?.itemCount} includeLink={false} />)}
                <h2 className='max-w-72 p-3'>{playlistData?.items[0]?.snippet?.description}</h2>
            </div>

            <h1 className='w-max mx-auto p-2 text-2xl font-semibold'>Playlist Items : {Math.min(playlistData?.items[0]?.contentDetails?.itemCount, MAX_PLAYLIST_VIDEOS)}</h1>
            <div className=' py-3 '>
                {

                    playlistVideosData?.items?.map((video, index) => (video != undefined && video?.status?.privacyStatus != "private" ? <div className='flex' key={video?.snippet?.resourceId?.videoId}> <span className='items-center'>{index + 1} </span><PlaylistVideoCard thumbnail={video?.snippet?.thumbnails} duration={video?.contentDetails?.duration} title={video?.snippet?.title} channelTitle={video?.snippet?.channelTitle} viewCount={video?.statistics?.viewCount} publishedAt={video?.snippet?.publishedAt} isLive={false} id={video?.snippet?.resourceId?.videoId} /></div> : null))
                }
            </div>

        </div>
    )
}

export default PlaylistVideosContainer