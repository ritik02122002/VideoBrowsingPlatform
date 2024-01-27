import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { PLAYLIST_VIDEOS_API_URL } from '../constants';
import { getCompleteUrl } from "../helper";
import VideoContainer from './VideoContainer';

const ChannelVideos = () => {
  const [channelData, setSelectedChannelSection] = useOutletContext();
  setSelectedChannelSection("videos")
  const playlistId = channelData?.items[0]?.contentDetails?.relatedPlaylists?.uploads;

  return (

    <VideoContainer VIDEOS_LIST_API_URL={getCompleteUrl(PLAYLIST_VIDEOS_API_URL, { playlistId: playlistId })} includeLiveVideo={false} type="playlistVideo" />
  )
}

export default ChannelVideos