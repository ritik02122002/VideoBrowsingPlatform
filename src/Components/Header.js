import { APP_LOGO, USER_ICON_URL } from '../constants'
import Search from './Search'
import { useDispatch } from "react-redux"
import { toggleScrollbarSize } from "../utility/menuSlice.js"
import { Link } from 'react-router-dom'
import HAMBURGER_MENU_BUTTON_ICON from "../assets/HAMBURGER_MENU_BUTTON_ICON.png"


const Header = () => {

    const dispatch = useDispatch();
    const changeScrollbarSize = () => dispatch(toggleScrollbarSize());
    console.log("header")
    return (
        <div className='px-3 py-4 flex justify-between shadow-sm shadow-gray-100 align-middle'>
            <ul className='flex'>
                <li onClick={() => changeScrollbarSize()}>
                    <img className="h-8 cursor-pointer px-2" alt="menu" src={HAMBURGER_MENU_BUTTON_ICON} />
                </li>
                <li>
                    <Link to="/">
                        <img className="h-6 cursor-pointer px-2" alt="youtube logo" src={APP_LOGO} />
                    </Link>
                </li>
            </ul>

            <Search />


            <ul className='flex'>


                <li><img src={USER_ICON_URL} className='h-8 px-2 mx-2 cursor-pointer'></img></li>

            </ul>
        </div>
    )
}

export default Header