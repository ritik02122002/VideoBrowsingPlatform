import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import NetworkStatus from './NetworkStatus'

const Body = () => {
  return (
    <>
      <NetworkStatus />
      <div className='flex'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}

export default Body