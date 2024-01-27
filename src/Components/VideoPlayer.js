import React, { useState } from 'react'
import { convertDateTime } from "../helper";
import { convertData } from "../helper";
import VideoPlayerShimmer from './VideoPlayerShimmer';
import { Link } from 'react-router-dom';

const VideoPlayer = ({ vData, channelData, videoId }) => {


    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

    return ((vData && channelData) ?
        <div className='my-4 w-[400px] sm:w-[500px] md:w-[700px] lg:w-[800px] xl:w-[930px]'>
            <iframe id="existing-iframe-example"
                width="100%" height="530"
                src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1&color=white&enablejsapi=1&fs=1"}

                allow="autoplay"
                allowFullScreen="allowfullscreen" className='rounded-xl'
            ></iframe>
            <h2 className="font-bold text-xl p-1 m-1 my-2 w-full">{vData?.items[0]?.snippet?.title}</h2>
            <div className='flex p-1 m-1 my-1 justify-between flex-wrap'>
                <div className='flex'>
                    <Link to={"/channel/" + channelData?.items[0]?.id + "/videos"}><img src={channelData?.items[0]?.snippet?.thumbnails?.high?.url} className='w-12 h-12 rounded-full mx-1' alt="channel" /></Link>
                    <div className="mx-1">
                        <h2 className='text-lg font-semibold ' >{vData?.items[0]?.snippet?.channelTitle}</h2>
                        <h3 className='text-md'>{convertData(channelData?.items[0]?.statistics?.subscriberCount)} subscribers</h3>
                    </div>
                </div>
                <h4 className=' h-max cursor-pointer bg-white hover:bg-red-500 hover:text-white rounded-sm border-red-500 border-2 py-1 px-2 text-lg text-red-600 font-semibold tracking-wider'>Subscribe</h4>
                <div className='flex'>
                    <h4 className=' h-max cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-l-md border-gray-300 border-r-2 py-1'><span className=' pl-3 pr-1 text-lg'>{vData?.items[0]?.statistics?.likeCount && convertData(vData?.items[0]?.statistics?.likeCount)}</span><i className="fa fa-thumbs-up fa-2x pr-2"></i></h4>
                    <h4 className=' h-max cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-r-md border-gray-300 py-1'><i className="fa fa-thumbs-down fa-2x px-2"></i></h4>
                </div>
                <h4 className=' h-max cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-md border-gray-300  py-1'><span className='py-1 pl-3 pr-1 text-lg'>Share</span><i className="fa fa-share mr-1 fa-fw fa-lg"></i></h4>
                <h4 className=' h-max cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-md border-gray-300  py-1'><span className='py-1 pl-3 pr-1 text-lg'>Download</span><i className="fa fa-download mr-1 fa-fw fa-lg"></i></h4>


            </div>
            <div className='rounded-md w-full pt-1 px-3 pb-3 bg-gray-100 cursor-pointer' onClick={() => {
                isDescriptionVisible ? setIsDescriptionVisible(false) : setIsDescriptionVisible(true)
            }}>
                <div className='flex justify-between'>
                    <h4 className='text-md  my-1'><div className='*:text-md my-1 *:font-semibold '><span className='mr-3 text-md'>{convertData(vData?.items[0]?.statistics?.viewCount)} views</span><span>{convertDateTime(vData?.items[0]?.snippet?.publishedAt)}</span></div></h4>
                    {isDescriptionVisible ?
                        <h4><i className="fa fa-angle-down text-md my-1"></i></h4> :
                        <h4><i className="fa fa-angle-up text-md my-1"></i></h4>
                    }
                </div>
                {isDescriptionVisible && <pre className='text-sm whitespace-pre-wrap font-thin'>{vData?.items[0]?.snippet?.description}</pre>}


            </div>

        </div> : <VideoPlayerShimmer />
    )
}

export default VideoPlayer