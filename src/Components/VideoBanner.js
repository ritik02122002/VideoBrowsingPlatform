import { Link } from 'react-router-dom';
import { convertDateTime } from '../helper';
import { decodeHtmlEntities } from "../helper";

const VideoBanner = ({ data }) => {
    const thumbnail = data?.snippet?.thumbnails;
    return (
        <Link to={"/watch?v=" + data?.id?.videoId}>
            <div className='p-1 mx-2 my-4 hover:shadow-md hover:shadow-gray-600 hover:bg-gray-50 rounded-md flex'>

                <img src={thumbnail?.maxres ? thumbnail?.maxres?.url : (thumbnail?.standard ? thumbnail?.standard?.url : (thumbnail?.high ? thumbnail?.high?.url : (thumbnail?.medium ? thumbnail?.medium?.url : thumbnail?.default?.url)))} alt='video thumbnail' className='rounded-lg h-40 w-64 md:h-52 md:w-80' />
                <div className='mx-3'>
                    <h2 className='text-sm md:text-md lg:text-lg xl:text-xl font-semibold px-1 my-3 line-clamp-3'>{decodeHtmlEntities(data?.snippet?.title)}</h2>
                    <h3 className='text-xs md:text-sm text-gray-700 px-1 my-1' >{data?.snippet?.channelTitle}</h3>
                    <h3 className='text-xs md:text-sm text-gray-600 my-1 px-1 line-clamp-2'>{data?.snippet?.description}</h3>

                    <h3 className='text-xs md:text-sm text-gray-600 px-1 my-1' ><i className="fa fa-calendar mx-1"></i>{convertDateTime(data?.snippet?.publishedAt)}</h3>


                </div>

            </div>
        </Link>
    )
}

export default VideoBanner