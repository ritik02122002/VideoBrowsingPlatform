import { PARTICULAR_CHANNEL_API_URL, PARTICULAR_VIDEO_API_URL } from "../constants";
import { getCompleteUrl } from "../helper";
import { useState, useEffect } from "react";

const useVideoAndChannelData = (videoid, dependencyArray) => {
    const [vData, setVData] = useState(null);
    const [channelData, setChannelData] = useState(null);

    const getVideoData = async () => {
        const data = await fetch(getCompleteUrl(PARTICULAR_VIDEO_API_URL, { id: videoid }));
        const jsondata = await data.json();
        console.log(jsondata)
        setVData(jsondata);
        getChannelData(jsondata.items[0].snippet.channelId);
    }
    const getChannelData = async (channel_id) => {
        const data = await fetch(getCompleteUrl(PARTICULAR_CHANNEL_API_URL, { id: channel_id }));
        const jsondata = await data.json();
        setChannelData(jsondata);
        console.log(jsondata);
    }
    useEffect(() => {
        getVideoData();
    }, dependencyArray)

    return [vData, setVData, channelData, setChannelData]


}

export default useVideoAndChannelData;
