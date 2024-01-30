import { Link } from 'react-router-dom';
import { convertDateTime } from '../helper';
import { decodeHtmlEntities } from "../helper";

const VideoBanner = ({ data }) => {
    const thumbnail = data?.snippet?.thumbnails;
    return (
        <Link to={"/watch?v=" + data?.id?.videoId}>
            <div className='p-1 mx-2 my-4 hover:shadow-md hover:shadow-gray-600 hover:bg-gray-50 rounded-md flex w-[calc(100vw-40px)] sm:w-[calc(100vw-330px)] flex-col xs:flex-row '>

                <img src={thumbnail?.maxres ? thumbnail?.maxres?.url : (thumbnail?.standard ? thumbnail?.standard?.url : (thumbnail?.high ? thumbnail?.high?.url : (thumbnail?.medium ? thumbnail?.medium?.url : thumbnail?.default?.url)))} alt='video thumbnail' className='rounded-lg h-40 w-64 md:h-52 md:w-80 bg-gray-100' />
                <div className='mx-2'>
                    <h2 className='text-sm md:text-base lg:text-lg xl:text-xl font-semibold px-1 my-1.5 line-clamp-3 break-word w-[calc(100vw-40px)] xs:w-[calc(100vw-300px)] sm:w-[calc(100vw-400px)] md:w-[calc(100vw-600px)]'>{decodeHtmlEntities(data?.snippet?.title)}</h2>
                    <h3 className='text-xs md:text-sm text-gray-700 px-1 break-words w-[calc(100vw-40px)] xs:w-[calc(100vw-300px)] sm:w-[calc(100vw-400px)] md:w-[calc(100vw-600px)]' >{data?.snippet?.channelTitle}</h3>
                    <h3 className='text-xs md:text-sm text-gray-600 my-1 px-1 line-clamp-2 break-words w-[calc(100vw-40px)] xs:w-[calc(100vw-300px)] sm:w-[calc(100vw-400px)] md:w-[calc(100vw-600px)]'>{data?.snippet?.description}</h3>

                    <h3 className='text-xs md:text-sm text-gray-600 px-1 my-1' ><i className="fa fa-calendar mr-1"></i>{convertDateTime(data?.snippet?.publishedAt)}</h3>


                </div>

            </div>
        </Link>
    )
}

export default VideoBanner