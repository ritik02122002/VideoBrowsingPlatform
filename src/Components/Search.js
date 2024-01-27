import React, { useEffect, useState } from 'react'
import { DEBOUNCING_WAIT_TIME_MILLISEC, ENTER_KEY_CODE, SEARCHBAR_BLUR_DELAY_MILLISECONDS, SEARCH_SUGGESTIONS_API_URL } from '../constants'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { cacheData } from '../utility/cachedSuggestionsSlice'
import SEARCH_ICON from '../assets/SEARCH_ICON.png'
import fetchJsonp from 'fetch-jsonp';

const Search = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchSuggestionCache = useSelector((store) => store?.searchSuggestionCache)

  const getSuggestionListData = async () => {
    const data=await fetchJsonp(SEARCH_SUGGESTIONS_API_URL + "&q=" + searchTxt)
    const jsondata = await data.json();
    setSuggestionList(jsondata[1]);
    dispatch(cacheData({ [searchTxt]: jsondata[1] }));


    console.log(jsondata[1]);
  }

  useEffect(() => {

    const timeoutId = setTimeout(() => {

      if (searchSuggestionCache[searchTxt])
        setSuggestionList(searchSuggestionCache[searchTxt])

      else
        getSuggestionListData()

    }, DEBOUNCING_WAIT_TIME_MILLISEC);


    return (() => {
      console.log("hello useeff")
      clearTimeout(timeoutId)
    })
  }, [searchTxt]);

  return (
    <div>
      <div className='flex '>
        <input type="text" className=' placeholder:text-gray-300  h-9 w-20 2xl:w-[650px] xl:w-[500px] lg:w-[450px] md:w-72 sm:w-56 border-gray-300 border-2 rounded-l-full p-2 pl-5 text-gray-700 focus:border-blue-600 focus:border-2 outline-none' placeholder='Search...'

          value={searchTxt}

          onChange={
            (e) => { setSearchTxt(e.target.value) }
          }

          onFocus={
            () => {
              setIsSuggestionsVisible(true);
            }
          }

          onBlur={
            () => {
              setTimeout(() => setIsSuggestionsVisible(false), SEARCHBAR_BLUR_DELAY_MILLISECONDS)
            }
          }

          onKeyDown={(e) => {
            if (e.keyCode === ENTER_KEY_CODE) {
              navigate("/results?search_query=" + searchTxt)
              e.target.blur();
            }
          }}

        ></input>
        <Link to={"/results?search_query=" + searchTxt}>
          <button className='h-9 border-gray-300 border-2 rounded-r-full border-l-0 p-2 px-5 bg-gray-50 hover:bg-gray-100'>
            <img className="h-4" src={SEARCH_ICON} alt="search Button" />
          </button>
        </Link>
      </div>
      {isSuggestionsVisible &&
        (
          <ul className=' absolute bg-white w-40 2xl:w-[650px] xl:w-[500px] lg:w-[450px] md:w-72 sm:w-56 shadow-lg shadow-gray-600 rounded-lg my-2 z-50 max-h-96 overflow-y-auto'>
            {suggestionList.map((listItem) =>
              <Link to={"/results?search_query=" + listItem} key={listItem}>
                <li className='p-1 pl-5 hover:bg-gray-50 cursor-pointer hover:font-semibold last:pb-3'

                  onClick={() => {
                    setSearchTxt(listItem)
                    console.log(listItem)
                  }}
                >
                  <i className="fa fa-search pr-3"></i> <span className='break-words'>{listItem}</span>
                </li>

              </Link>)}
          </ul>)}
    </div>
  )
}

export default Search