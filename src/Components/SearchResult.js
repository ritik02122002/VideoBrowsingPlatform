import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import VideoBanner from './VideoBanner';
import { SEARCH_API_URL } from '../constants';
import { getCompleteUrl, mergeSearchResults } from "../helper";
import { useDispatch, useSelector } from 'react-redux';
import { addResult, clearResults } from '../utility/searchResultSlice';
import SearchResultsShimmer from './SearchResultsShimmer';


const SearchResult = () => {



    const [searchTxt] = useSearchParams();
    const [pageToken, setPageToken] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const [isSearchResultsAvailable, setIsSearchResultsAvailable] = useState(true);

    const dispatch = useDispatch();
    const [searchObj, setSearchObj] = useState({
        type: "video",
        order: "relevance",
        videoDuration: "any",
        maxResults: "25",
        eventType: "completed"
    });
    const searchResultList = useSelector((store) => store?.searchResult?.results);


    console.log(searchObj)
    console.log(pageToken);

    const fetchSearchResults = async () => {

        const url = getCompleteUrl(SEARCH_API_URL, { ...searchObj, q: (searchTxt.get("search_query")), ...(pageToken && { pageToken: pageToken }) });
        const data = await fetch(url);
        const jsonData = await data.json();

        console.log(searchResultList.length);
        console.log(jsonData.items.length)

        const mergedResultsArray = mergeSearchResults(searchResultList, jsonData?.items);
        dispatch(addResult(jsonData?.items))
        console.log(mergedResultsArray)

        if (jsonData?.items?.length == 0 || searchResultList?.length == mergedResultsArray?.length || mergedResultsArray?.length > 75) {
            setIsSearchResultsAvailable(false)

            setIsFetching(false)
            return;
        }

        console.log(jsonData);
        setPageToken(jsonData?.nextPageToken)
        setIsFetching(false);

    }
    function handleScroll(event) {

        if ((Math.ceil(event.target.offsetHeight + event.target.scrollTop) >= (event.target.scrollHeight)) && (!isFetching) && (isSearchResultsAvailable)) {
            fetchSearchResults();
            setIsFetching(true);
        }

    }


    useEffect(() => {

        fetchSearchResults();
        console.log("hii")

        return () => {
            setPageToken(null);
            setIsSearchResultsAvailable(true);
            dispatch(clearResults())
            console.log('clear')
        }


    }, [searchTxt, searchObj])



    return (
        <div className='h-[calc(100vh-70px)] overflow-y-auto w-full' onScroll={

            (event) => {

                handleScroll(event)
            }
        } id="searchResults">

            <select onChange={(e) => {
                setSearchObj({
                    ...searchObj,
                    order: e.target.value
                })
            }} className="mx-2 border-gray-200 border-2 p-1 hover:outline-none hover:border-gray-400 outline-none my-2">  {console.log("diff filter2")}
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
            <select onChange={(e) => {
                setSearchObj({
                    ...searchObj,
                    videoDuration: e.target.value
                })
            }} className="mx-2 border-gray-200 border-2 p-1 hover:outline-none hover:border-gray-400 outline-none my-2">  {console.log("diff filter2")}
                <option value="any">
                    Any
                </option>
                <option value="short" >
                    Short (Under 4 min)
                </option>
                <option value="medium">
                    Medium (4 - 20 min)
                </option>
                <option value="long">
                    Long (over 20 min)
                </option>
            </select>

            <select onChange={(e) => {
                setSearchObj({
                    ...searchObj,
                    eventType: e.target.value
                })
            }} className="mx-2 border-gray-200 border-2 p-1 hover:outline-none hover:border-gray-400 outline-none my-2">  {console.log("diff filter2")}
                <option value="completed" >
                    Completed
                </option>
                <option value="live">
                    Live
                </option>
            </select>

            {searchResultList?.length != 0 ?
                <div className='my-4 mx-2'>
                    {
                        searchResultList?.map((video) => (video ? <VideoBanner data={video} key={video?.id?.videoId} /> : null))
                    }
                </div> :
                (isSearchResultsAvailable &&
                    <SearchResultsShimmer />)
            }
            {isFetching && (<div className='w-max mx-auto my-3 '><span className='text-base md:text-lg lg:text-xl text-gray-700 font-semibold'>Fetching more results...</span><i className="fa fa-spinner fa-spin fa-xl" ></i></div>)}
            {!isSearchResultsAvailable && (<div className='w-max mx-auto my-3 '><span className='text-base md:text-lg lg:text-xl text-gray-700 font-semibold'>No more results found.</span></div>)}
        </div>

    )
}

export default SearchResult