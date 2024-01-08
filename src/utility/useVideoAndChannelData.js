import { API_KEY } from "../constants";
import { useState, useEffect } from "react";

const PARTICULAR_VIDEO_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";
const PARTICULAR_CHANNEL_API_URL = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=";


const useVideoAndChannelData = (videoid) => {
    const [vData, setVData] = useState(null);
    const [channelData, setChannelData] = useState(null);

    const getVideoData = async () => {
        const data = await fetch(PARTICULAR_VIDEO_API_URL + videoid + "&key=" + API_KEY);
        const jsondata = await data.json();
        console.log(jsondata)
        setVData(jsondata);
        getChannelData(jsondata.items[0].snippet.channelId);
    }
    const getChannelData = async (channel_id) => {
        const data = await fetch(PARTICULAR_CHANNEL_API_URL + channel_id + "&key=" + API_KEY);
        const jsondata = await data.json();
        setChannelData(jsondata);
        console.log(jsondata);
    }
    useEffect(() => {
        getVideoData();
    }, [])

    return [vData, setVData, channelData, setChannelData]


}

export default useVideoAndChannelData;
