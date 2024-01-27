import React from 'react'
import VideoContainer from './VideoContainer'
import { VIDEOS_LIST_API_URL } from '../constants'

const MainContainer = () => {
  return (
    <div className='w-full overflow-y-auto h-[calc(100vh-70px)] p-3'>
      <VideoContainer VIDEOS_LIST_API_URL={VIDEOS_LIST_API_URL} includeLiveVideo={true} type="video" />

    </div>

  )
}

export default MainContainer