import VideoContainer from './VideoContainer'
import { VIDEOS_LIST_API_URL } from '../constants'
import { getCompleteUrl } from "../helper";
import { useParams } from 'react-router-dom'

const CategoryItem = () => {
    const categoryId = useParams();
    return (
        <div className='w-full overflow-y-auto h-[calc(100vh-70px)] p-3'>
            <VideoContainer VIDEOS_LIST_API_URL={getCompleteUrl(VIDEOS_LIST_API_URL, { videoCategoryId: categoryId.categoryId })} includeLiveVideo={false} type="video" dependency={[categoryId]} />
        </div>
    )
}

export default CategoryItem