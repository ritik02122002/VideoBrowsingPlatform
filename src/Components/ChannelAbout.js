import { convertData } from "../helper";
import { useOutletContext } from 'react-router-dom';

const ChannelAbout = () => {
  const [channelData, setSelectedChannelSection] = useOutletContext();
  setSelectedChannelSection("about")

  return (
    channelData &&
    <div className='mt-5 p-1'>
      <h1 className='text-xl font-semibold'>Description</h1>
      <pre className='whitespace-pre-wrap text-md my-2 py-1 text-gray-700'>{channelData?.items[0]?.brandingSettings?.channel?.description}</pre>

      <h1 className='mt-7 text-xl font-semibold'>Statistics</h1>
      <div className='*:text-md  *:mt-1 *:text-gray-800'>

        <h3>Subscribers: {convertData(channelData?.items[0]?.statistics?.subscriberCount)}</h3>
        <h3>Videos: {convertData(channelData?.items[0]?.statistics?.videoCount)}</h3>
        <h3>Views: {convertData(channelData?.items[0]?.statistics?.viewCount)}</h3>
      </div>
    </div>
  )
}

export default ChannelAbout