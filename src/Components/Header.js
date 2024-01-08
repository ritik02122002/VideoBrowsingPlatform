import React, { useEffect } from 'react'
import { APP_LOGO, CREATE_ICON_URL, HAMBURGER_MENU_BUTTON_URL, NOTIFICATION_ICON_URL, USER_ICON_URL, VIDEOS_LIST_API_URL } from '../constants'
import Search from './Search'
import { useDispatch } from "react-redux"
import { toggleScrollbar } from "../utility/menuSlice.js"
import { Link } from 'react-router-dom'
const Header = () => {

    const fetchSubscribers = async () => {

        // const jsondata = await data.json();
        // console.log(jsondata);
    }

    useEffect(() => {
        fetchSubscribers();
    }, [])
    // const scrollbarStatus=
    const dispatch = useDispatch();
    const changeScrollbar = () => dispatch(toggleScrollbar());
    console.log("header")
    return (
        <div className='m-3 flex justify-between shadow-sm shadow-gray-100'>
            <ul className='flex'>
                <li onClick={() => changeScrollbar()}>
                    <img className="h-8 cursor-pointer px-2" alt="menu button" src={HAMBURGER_MENU_BUTTON_URL} />
                </li>
                <li>
                    <Link to="/">
                        <img className="h-7 cursor-pointer px-2" alt="youtube_logo" src={APP_LOGO} />
                    </Link>
                </li>
            </ul>
            <ul className='flex'>
                <li><Search /></li>
                <li></li>
            </ul>
            <ul className='flex'>
                <li><img src={CREATE_ICON_URL} className='h-8 px-2 mx-2 cursor-pointer'></img></li>
                <li><img src={NOTIFICATION_ICON_URL} className='h-8 px-2 mx-2 cursor-pointer'></img></li>
                <li><img src={USER_ICON_URL} className='h-8 px-2 mx-2 cursor-pointer'></img></li>
            </ul>
            {/* <Outlet/> */}

        </div>
    )
}

export default Header