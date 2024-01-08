import React from 'react'
import { SIDEBAR_ARRAY } from '../constants'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const SubSidebarLarge = ({ data }) => {

    return (

        <div className='mb-8'>

            <h1 className='text-2xl font-semibold'>{data.category}</h1>
            <ul className='w-full'>
                {data.elements.map(element => (
                    <div className="flex my-5" key={element.name}>
                        <img className="h-7 mr-3 w-6" alt={element.name} src={element.imageUrl} />
                        <h3 className='text-lg mr-4'>{element.name}</h3>
                    </div>

                ))}
            </ul>
        </div>
    )

}

const SubSidebarSmall = ({ data }) => {

    return (

        <div className='mt-5 mr-1 ml-2'>
            {data.map((data) => (
                <div className='my-3' key={data.name}>
                    <img src={data.imageUrl} className="h-5 mb-1 w-5 mx-auto" />
                    <h1 className='text-sm mx-auto w-max'>{data.name}</h1>
                </div>
            ))

            }
        </div>
    )

}

const Sidebar = () => {
    const isScrollbarLarge = useSelector(store => store.menu.isScrollbarLarge);
    return isScrollbarLarge ? (

        <div className='m-3 h-[680px] overflow-y-scroll scroll-smooth min-w-max'>
            <Link to="/">
                {SIDEBAR_ARRAY.map((data, index) => <SubSidebarLarge data={data} key={index} />)
                }
            </Link>
        </div>


    ) :
        (

            <SubSidebarSmall data={SIDEBAR_ARRAY[0].elements} key={1}/>

        )
}

export default Sidebar