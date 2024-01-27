import React from 'react'
import { SIDEBAR_ARRAY } from '../constants'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'


const SubSidebarLarge = ({ data }) => {

    return (

        <div className='mb-4'>

            <h1 className='text-2xl font-semibold px-2'>{data?.category}</h1>
            <ul className='w-full '>
                {data?.elements?.map(element => (
                    <Link to={element?.to} key={element?.name}>
                        <div className="flex my-3 rounded-md hover:bg-gray-100 py-1 px-2" >
                            {element?.icon ? <i className={element?.icon + " fa-2x mr-3 fa-fw"}></i> :
                                <img className="h-9 mr-3 w-9 rounded-full" alt={element?.name} src={element?.img} />}
                            <h3 className='text-lg pr-1'>{element?.name}</h3>
                        </div>
                    </Link>

                ))}

            </ul>
        </div>
    )

}

const SidebarSmall = () => {

    return (

        <div className='mr-1 m-3 pr-1 hidden sm:block '>
            <Link to="/">
                <div className='my-2 py-1 px-2 rounded-md hover:bg-gray-100'>
                    <span className='mx-auto w-max'><i className="fa fa-home fa-2x"></i></span>
                    <h1 className='text-sm mx-auto w-max'>Home</h1>
                </div>
            </Link>


        </div>
    )

}

const Sidebar = () => {
    const isSideBarLarge = useSelector(store => store?.menu?.isSideBarLarge);
    const position = useSelector(store => store?.menu?.position);
    return isSideBarLarge ? (


        <div className={'z-40 mr-2 pl-2 pr-2 overflow-y-auto min-w-max shadow-md shadow-gray-500 bg-white' + ((position == 'fixed') ? ' fixed h-[calc(100vh-70px)]' : ' fixed h-[calc(100vh-70px)] md:static')}>

            {
                SIDEBAR_ARRAY?.map((data, index) => <SubSidebarLarge data={data} key={index} />)
            }
            <AboutUs />
        </div>


    ) :
        (

            <SidebarSmall />

        )
}

export default Sidebar