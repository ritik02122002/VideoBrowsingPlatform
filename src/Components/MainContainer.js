import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='w-full overflow-y-auto h-[680px] m-auto'>
      <ButtonList />
      <VideoContainer />
    </div>

  )
}

export default MainContainer