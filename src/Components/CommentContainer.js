import React, { useEffect, useState } from 'react'
import useDataList from '../utility/useDataList'
import { COMMENT_API_URL } from '../constants';
import CommentsShimmer from './CommentsShimmer';
import { Link } from 'react-router-dom';


const Comment = ({ text, authorDisplayName, authorProfileImageUrl, replies, channelId }) => {

    const [isRepliesVisible, setisRepliesVisisble] = useState(false);

    return (
        <div className='my-4'>
            <div className='flex m-2'>
                <Link to={"/channel/" + channelId}><img src={authorProfileImageUrl} alt="user" className='h-8 rounded-full mr-2 m-1' /></Link>
                <div>
                    <h2 className='text-sm p-1 font-semibold'>{authorDisplayName}</h2>
                    <h2 className='text-sm'>{text}</h2>


                    {replies && (
                        <div onClick={() => (isRepliesVisible ? setisRepliesVisisble(false) : setisRepliesVisisble(true))} className='bg-gray-100 w-max px-2 py-1 m-1 rounded-sm hover:bg-gray-200 cursor-pointer'>
                            {isRepliesVisible ?
                                <i className="fa fa-angle-down text-md my-1"></i> :
                                <i className="fa fa-angle-up text-md my-1"></i>}
                            <button className='mx-2' >{replies?.comments?.length} replies</button>

                        </div>
                    )}
                </div>
            </div>
            {replies && isRepliesVisible && (

                replies?.comments?.map((commentData) =>
                    <Reply text={commentData?.snippet?.textOriginal} authorProfileImageUrl={commentData?.snippet?.authorProfileImageUrl} authorDisplayName={commentData?.snippet?.authorDisplayName} channelId={commentData?.snippet?.authorChannelId?.value} />
                )

            )
            }

        </div>

    )
}

const Reply = ({ text, authorDisplayName, authorProfileImageUrl, channelId }) => {
    return (
        <div className='flex m-2 ml-8'>
            <Link to={"/channel/" + channelId}>  <img src={authorProfileImageUrl} alt="user" className='h-6 rounded-full mr-2 m-1 text-sm' /></Link>

            <div>
                <h2 className='text-xs p-1 font-semibold'>{authorDisplayName}</h2>
                <h2 className='text-xs'>{text}</h2>
            </div>
        </div>

    )
}

const CommentThread = ({ videoId }) => {
    const [commentData] = useDataList(COMMENT_API_URL, { videoId: videoId, maxResults: 20, order: "relevance" }, []);
    console.log(commentData);
    return (commentData ? (
        <div className='shadow-lg shadow-gray-500 my-2 py-3'>
            {
                commentData?.items?.map((commentData) =>
                    <Comment text={commentData?.snippet?.topLevelComment?.snippet?.textOriginal} authorProfileImageUrl={commentData?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} authorDisplayName={commentData?.snippet?.topLevelComment?.snippet?.authorDisplayName} replies={commentData?.replies} channelId={commentData?.snippet?.topLevelComment?.snippet?.authorChannelId?.value} />
                )

            }
        </div>) :
        <CommentsShimmer />
    )
}

const CommentContainer = ({ videoId, numComments }) => {

    const [isCommentsVisible, setisCommentsVisisble] = useState(false);

    useEffect(() => {
        return () => {
            setisCommentsVisisble(false);
        }
    }, [videoId])

    return (
        <div className='shadow-lg shadow-gray-500 w-[400px] sm:w-[500px] md:w-[700px] lg:w-[800px] xl:w-[930px]' >

            <div className='px-2 py-1 m-1 rounded-sm flex justify-between cursor-pointer' onClick={() => (isCommentsVisible ? setisCommentsVisisble(false) : setisCommentsVisisble(true))}>
                <h1 className='text-xl font-bold m-2 p-1'>{numComments} Comments</h1>
                {isCommentsVisible ?
                    <i className="fa fa-angle-down text-md my-1"></i> :
                    <i className="fa fa-angle-up text-md my-1"></i>}
            </div>
            {isCommentsVisible &&
                <CommentThread videoId={videoId} />
            }

        </div>
    )
}

export default CommentContainer