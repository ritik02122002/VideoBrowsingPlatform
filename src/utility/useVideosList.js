import { VIDEOS_LIST_API_URL } from "../constants";
import { useState ,useEffect} from "react";
import { API_KEY } from "../constants";
const useVideosList = (pageToken) => {
  console.log(pageToken);
    const [videoList, setVideoList] = useState(null);
    const getVideos = async () => {
      let url=null;
      if(pageToken==null)
      url=VIDEOS_LIST_API_URL+"&key="+API_KEY;
    else
    url=VIDEOS_LIST_API_URL+"&pageToken="+pageToken+"&key="+API_KEY;
        const data = await fetch(url);
        const jsonObj = await data.json();
        console.log(jsonObj);
        setVideoList(jsonObj);
    }
    useEffect(() => {getVideos()}
    , [pageToken])

  return [videoList,setVideoList];
}

export default useVideosList