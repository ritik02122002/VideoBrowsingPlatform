import VideoCardShimmer from './VideoCardShimmer';
import useDataList from '../utility/useDataList';
import PlaylistCard from './PlaylistCard';

const PlaylistContainer = ({ PLAYLIST_API_URL }) => {

    const [playList] = useDataList(PLAYLIST_API_URL, {}, []);

    return (playList == null ?
        <VideoCardShimmer />
        :
        <div>
            <div className='flex flex-wrap justify-center py-3'>
                {

                    playList?.items?.map(playList => (playList ? <PlaylistCard thumbnail={playList?.snippet?.thumbnails} title={playList?.snippet?.title} channelTitle={playList?.snippet?.channelTitle} viewCount={playList?.statistics?.viewCount} publishedAt={playList?.snippet?.publishedAt} key={playList?.id} id={playList?.id} itemCount={playList?.contentDetails?.itemCount} includeLink={true} /> : null))
                }
            </div>

        </div>
    )
}

export default PlaylistContainer