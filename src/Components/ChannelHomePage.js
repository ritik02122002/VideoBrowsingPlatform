import React, { useState } from 'react'
import useDataList from '../utility/useDataList'
import { CHANNEL_API_URL } from '../constants';
import { Link, Outlet, useParams } from 'react-router-dom';

const ChannelHomePage = () => {
    const cId = useParams();

    console.log(cId);
    const [channelData] = useDataList(CHANNEL_API_URL, { id: cId?.channelId }, [cId]);
    const [selectedChannelSection, setSelectedChannelSection] = useState(null);
    let thumbnail;
    if (channelData)
        thumbnail = channelData?.items[0]?.snippet?.thumbnails;
    return channelData && (

        <div className='w-full h-[calc(100vh-70px)] overflow-y-auto'>
            <div className='p-2 w-full bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90% py-4'>

                <div className='flex justify-center'>
                    <img src={thumbnail?.maxres ? thumbnail?.maxres?.url : (thumbnail?.standard ? thumbnail?.standard?.url : (thumbnail?.high ? thumbnail?.high?.url : (thumbnail?.medium ? thumbnail?.medium?.url : thumbnail?.default?.url)))} alt="channel thumbnail" className='rounded-full h-40 w-40 my-1 mx-2' />
                    <div className='mx-4 mt-3'>
                        <h1 className='text-3xl font-bold mb-3  w-max mx-auto py-2 '>{channelData?.items[0]?.brandingSettings?.channel?.title}</h1>
                        <h4 className=' h-max cursor-pointer bg-white hover:bg-red-500 hover:text-white rounded-sm border-red-500 border-2 py-1 px-2 text-lg text-red-600 font-semibold tracking-wider w-max bg-opacity-50'>Subscribe</h4>
                    </div></div>
            </div>
            <div className='px-5 py-4 '>
                <ul className=' flex shadow-md shadow-gray-100  *:px-4 *:py-1 *:text-xl bg-white sticky top-0 z-10'>

                    <Link to="videos" className={(selectedChannelSection === "videos") ? 'font-bold border-b-2 border-black' : undefined}><li>Videos</li></Link>

                    <Link to="playlists" className={(selectedChannelSection == "playlists") ? 'font-bold border-b-2 border-black' : undefined}><li>Playlists</li></Link>
                    <Link to="about" className={(selectedChannelSection == "about") ? 'font-bold border-b-2 border-black' : undefined}><li>About</li></Link>
                </ul>
                <Outlet context={[channelData, setSelectedChannelSection]} />
            </div>



        </div>
    )
}

export default ChannelHomePage