import React, { useState } from 'react'
import { convertDateTime, copyContent } from "../helper";
import { convertData } from "../helper";
import VideoPlayerShimmer from './VideoPlayerShimmer';
import { Link } from 'react-router-dom';
import ADD_TO_PLAYLIST_ICON from '../assets/ADD_TO_PLAYLIST_ICON.png'
import { TELEGRAM_SEND_MSG_API_URL, WHATSAPP_SEND_MSG_API_URL } from '../constants';
const VideoPlayer = ({ vData, channelData, videoId }) => {


    console.log(window.location.href);
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
    const [isShareContainerVisible, setIsShareContainerVisible] = useState(false);

    return ((vData && channelData) ?
        <div className='my-4 w-[320px] xs:w-[400px] sm:w-[500px] md:w-[700px] lg:w-[800px] xl:w-[930px] mx-auto'>
            <iframe id="existing-iframe-example"
                src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1&color=white&enablejsapi=1&fs=1"}

                allow="autoplay"
                allowFullScreen="allowfullscreen" className='rounded-xl h-[180px] xs:h-[225px] sm:h-[283px] md:h-[394px] lg:h-[450px] xl:h-[523px] w-full bg-gray-100'
            ></iframe>
            <h2 className="font-bold text-xl p-1 m-1 my-2 w-full">{vData?.items[0]?.snippet?.title}</h2>
            <div className='flex p-1 m-1 my-1 justify-between flex-wrap *:mx-2 *:mb-3'>
                <div className='flex'>
                    <Link to={"/channel/" + channelData?.items[0]?.id + "/videos"}><img src={channelData?.items[0]?.snippet?.thumbnails?.high?.url} className='w-12 h-12 rounded-full mx-1' alt="channel" /></Link>
                    <div className="mx-1">
                        <h2 className='text-lg font-semibold ' >{vData?.items[0]?.snippet?.channelTitle}</h2>
                        <h3 className='text-base'>{convertData(channelData?.items[0]?.statistics?.subscriberCount)} subscribers</h3>
                    </div>
                </div>
                <h4 className=' h-max cursor-pointer bg-white hover:bg-red-500 hover:text-white rounded-sm border-red-500 border-2 py-1 px-2 text-lg text-red-600 font-semibold tracking-wider'>Subscribe</h4>
                <div className='flex'>
                    <h4 className=' h-max cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-l-md border-gray-300 border-r-2 py-1'><span className=' pl-3 pr-1 text-lg'>{vData?.items[0]?.statistics?.likeCount && convertData(vData?.items[0]?.statistics?.likeCount)}</span><i className="fa fa-thumbs-up fa-2x pr-2"></i></h4>
                    <h4 className=' h-max cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-r-md border-gray-300 py-1'><i className="fa fa-thumbs-down fa-2x px-2"></i></h4>
                </div>
                <h4 className=' h-max cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-md border-gray-300  py-1'><div className='flex'><span className='py-1 pl-3 pr-1 text-lg'>Save</span><img className="mr-1 h-9 mx-1" src={ADD_TO_PLAYLIST_ICON} /></div></h4>
                <div className='relative group'><h4 className=' h-max cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-md border-gray-300  py-1'>
                    <span className='py-1 pl-3 pr-1 text-lg' onClick={() => setIsShareContainerVisible(!isShareContainerVisible)}>Share</span><i className="fa fa-share mr-1 fa-fw fa-lg"></i></h4>
                    {isShareContainerVisible && <div className='fixed bg-white shadow-inner shadow-gray-400 z-10 rounded-md top-20 sm:top-52 left-[3vw] sm:left-1/4' >
                        <i className="fa fa-times text-right w-max fa-2x p-2 hover:cursor-pointer hover:text-red-500" onClick={() => setIsShareContainerVisible(false)}></i>
                        <div className='flex justify-center'>
                            <a target='_blank' href={WHATSAPP_SEND_MSG_API_URL + 'Watch this amazing video : ' + vData?.items[0]?.snippet?.title + "%0a Link: " + window.location.href}><div className='w-max py-2 px-3 mx-2 my-2 hover:bg-gray-100 rounded-md'><i className="fa fa-whatsapp  fa-3x text-green-600"></i><h2 className='text-sm'>WhatsApp</h2></div></a>
                            <a target='_blank' href={TELEGRAM_SEND_MSG_API_URL + window.location.href + "&text=Watch this amazing video : " + vData?.items[0]?.snippet?.title}><div className='w-max py-2 px-2 mx-2 my-2 hover:bg-gray-100 rounded-md'><i className="fa fa-telegram fa-3x text-sky-500 "></i><h2 className='text-sm'>Telegram</h2></div></a>
                            <a href={"mailto:?subject=Watch this amazing video : " + encodeURIComponent(vData?.items[0]?.snippet?.title) + "&body=Link : " + encodeURIComponent(window.location.href)}><div className='w-max py-2 px-2 mx-2 my-2 hover:bg-gray-100 rounded-md'><i className="fa fa-envelope fa-3x text-gray-500"></i><h2 className='text-sm'>Email</h2></div></a>
                        </div>
                        <div className='py-1 px-2 my-1 mx-1 border-gray-600 border-2 whitespace-nowrap font-semibold text-xs sm:text-sm rounded-md'>{window.location.href} <button className='text-white bg-black font-semibold text-sm sm:text-base rounded-md p-2 mx-3 my-2 hover:text-black hover:bg-white hover:border-2 hover:border-black' onClick={() => { copyContent(window.location.href) }}>Copy</button></div>
                    </div>}
                </div>
                {/* <h4 className=' h-max cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-md border-gray-300  py-1'><span className='py-1 pl-3 pr-1 text-lg'>Download</span><i className="fa fa-download mr-1 fa-fw fa-lg"></i></h4> */}


            </div>
            <div className='rounded-md w-full pt-1 px-3 pb-3 bg-gray-100 cursor-pointer' onClick={() => {
                isDescriptionVisible ? setIsDescriptionVisible(false) : setIsDescriptionVisible(true)
            }}>
                <div className='flex justify-between'>
                    <h4 className='text-base  my-1'><div className='*:text-base my-1 *:font-semibold '><span className='mr-3 text-base'>{convertData(vData?.items[0]?.statistics?.viewCount)} views</span><span>{convertDateTime(vData?.items[0]?.snippet?.publishedAt)}</span></div></h4>
                    {isDescriptionVisible ?
                        <h4><i className="fa fa-angle-down text-base my-1"></i></h4> :
                        <h4><i className="fa fa-angle-up text-base my-1"></i></h4>
                    }
                </div>
                {isDescriptionVisible && <pre className='text-sm whitespace-pre-wrap font-thin break-words break-keep'>{vData?.items[0]?.snippet?.description}</pre>}


            </div>

        </div> : <VideoPlayerShimmer />
    )
}

export default VideoPlayer