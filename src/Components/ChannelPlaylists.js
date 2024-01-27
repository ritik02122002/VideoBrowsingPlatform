import React from 'react'
import useDataList from '../utility/useDataList';
import { PLAYLIST_API_URL } from '../constants';
import { getCompleteUrl } from "../helper";
import { Outlet, useOutletContext } from 'react-router-dom';
import PlaylistContainer from './PlaylistContainer';


const ChannelPlaylists = () => {
  const [channelData, setSelectedChannelSection] = useOutletContext();
  setSelectedChannelSection("playlists")
  const channelId = channelData?.items[0]?.id;
  const [playlistData] = useDataList(PLAYLIST_API_URL, { channelId: channelId }, []);
  console.log(playlistData);
  return (

    <div className='flex overflow-x-auto'>

      <PlaylistContainer PLAYLIST_API_URL={getCompleteUrl(PLAYLIST_API_URL, { channelId: channelId })} />
      <Outlet />
    </div>
  )
}

export default ChannelPlaylists