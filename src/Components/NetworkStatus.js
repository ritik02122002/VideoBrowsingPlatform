import React, { useEffect, useState } from 'react'
import { NETWORK_STATUS_VISIBLE_TIME_MILLISEC } from '../constants';

const NetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState(null);

  const setOnline = () => {
    setNetworkStatus("online");
  }

  const setOffline = () => {
    setNetworkStatus("offline");
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNetworkStatus(null)
    }, NETWORK_STATUS_VISIBLE_TIME_MILLISEC);

    console.log("useeff")
    return () => {
      clearTimeout(timeoutId)
    }

  }, [networkStatus])

  useEffect(() => {
    window.addEventListener("online", setOnline)
    window.addEventListener("offline", setOffline)

    return () => {
      window.removeEventListener("online", setOnline)
      window.removeEventListener("offline", setOffline);
    }

  }, [])
  console.log("hii")
  console.log(networkStatus)
  return (

    <>
      {networkStatus === "offline" && <div className='absolute top-[65px] z-50  bg-red-50 p-1 w-full text-center shadow-md shadow-red-400'><span className=' mx-2'>Looks like you're offline</span><i className="fa fa-circle text-red-600"></i> </div>}
      {networkStatus === "online" && <div className='absolute top-[65px] z-50  bg-green-50 p-1 w-full text-center shadow-md shadow-green-400'><span className=' mx-2'>Back Online</span><i className="fa fa-circle text-green-600"></i> </div>
      }
    </>)
}

export default NetworkStatus