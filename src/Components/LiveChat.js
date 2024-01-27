import React from 'react'
import ProfileImage from './ProfileImage'

const LiveChat = ({ name, message, color }) => {
    return (
        <div className='flex m-1'>
            <ProfileImage first_letter={name[0]} color={color} size={"text-sm"} />
            <div className='ml-2 w-full overflow-hidden'>
                <span className='text-md font-semibold mr-2 text-gray-700 break-words'>{name}</span>
                <span className='text-md break-words'>{message}</span>
            </div>
        </div>

    )
}

export default LiveChat