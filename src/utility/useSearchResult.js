import { SEARCH_API_URL } from "../constants";
import { useState ,useEffect} from "react";
import { API_KEY } from "../constants";
const useSearchResult = (searchObj) => {
//   console.log(pageToken);
    const [searchResultList, setSearchResultList] = useState(null);
    const getSearchResults= async () => {
    //   let url=null;
    //   if(pageToken==null)
    //   url=VIDEOS_LIST_API_URL+"&key="+API_KEY;
    // else
    // url=VIDEOS_LIST_API_URL+"&pageToken="+pageToken+"&key="+API_KEY;
        const data = await fetch(SEARCH_API_URL+"&q="+searchObj.searchQuery+"&type="+searchObj.type+"&order="+searchObj.order+"&videoDuration"+searchObj.videoDuration+"&key="+API_KEY);
        const jsonObj = await data.json();
        console.log(jsonObj);
        setSearchResultList(jsonObj);
    }
    useEffect(() => {getSearchResults()}
    , [searchObj])

  return [searchResultList, setSearchResultList];
}

export default useSearchResult