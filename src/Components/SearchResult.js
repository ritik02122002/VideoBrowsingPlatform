import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import VideoBanner from './VideoBanner';
import useDataList from '../utility/useDataList';
import { SEARCH_API_URL } from '../constants';

const SearchResult = () => {
    console.log("hii");
    const [searchTxt,setSearchTxt] = useSearchParams();
    const [searchQuery,setSearchQuery] = useState(searchTxt.get("search_query"))
    const [searchObj, setSearchObj] = useState({
        type: "video,channel,playlist",
        order: "relevance",
        videoDuration: "any",
        q: searchQuery
    });
    // searchTxt=searchTxt.get("search_query");
    // const [searchResultList, setSearchResultList] = useSearchResult(searchObj);
    const [searchResultList, setSearchResultList] =useDataList(SEARCH_API_URL,searchObj,[searchObj])
    { console.log(searchResultList) }
    return (searchResultList ?
        <div className='h-[680px] overflow-y-scroll'>

            <select onChange={(e) => {
                setSearchObj({
                    ...searchObj,
                    order: e.target.value
                })
            }} className="mx-2 border-gray-200 border-2 p-1 hover:outline-none hover:border-gray-400 outline-none">  {console.log("diff filter2")}
                <option value="relevance">
                    Relevance
                </option>
                <option value="date" >
                    Upload Date
                </option>
                <option value="rating">
                    Rating
                </option>
                <option value="viewCount">
                    View Count
                </option>
            </select>


            <div className='my-4 mx-2'>
                {/* {searchTxt.get("search_query")}
     {console.log(searchResultList)
     } */}

                {
                    searchResultList.items.map(video => (video != undefined ? <VideoBanner data={video} key={video.id.videoId} /> : null))
                }
            </div>
        </div>
        : null
    )
}

export default SearchResult