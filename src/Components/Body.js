import Menubar from './Menubar'
import { Outlet } from 'react-router-dom'
import NetworkStatus from './NetworkStatus'

const Body = () => {
  return (
    <>
      <NetworkStatus />
      <div className='flex'>
        <Menubar />
        <Outlet />
      </div>
    </>
  )
}

export default Body