import React, { useEffect, useState } from 'react'
import LiveChat from './LiveChat'
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../utility/liveChatSlice';
import { CONSECUTIVE_LIVECHATS_DELAY_MILLISECONDS, DEFAULT_CHAT_MESSAGE, ENTER_KEY_CODE, LIVECHAT_POLLING_DELAY_MILLISECONDS, MAX_CHATS_IN_SINGLE_API_POLL, nameList } from '../constants';
import { randomNumberLessThanN } from "../helper";
import { clearAllChats } from '../utility/liveChatSlice';
import { colors } from '../constants';
import ProfileImage from './ProfileImage';

const LiveChatContainer = () => {

    console.log("hii");
    const dispatch = useDispatch();
    const chats = useSelector((store) => store.liveChat.chats);
    const [chatTxt, setChatTxt] = useState("");
    const [isChatVisible, setIsChatVisible] = useState(true);

    const addRandomChat = () => {
        const randomNumber1 = randomNumberLessThanN(nameList.length);
        const name = nameList[randomNumber1];
        const randomNumber2 = randomNumberLessThanN(colors.length);
        dispatch(addChat({ name: name, message: DEFAULT_CHAT_MESSAGE + name, color: colors[randomNumber2] }))
    }

    useEffect(() => {
        let inter;
        isChatVisible && (
            inter = setInterval(() => {
                let randomNumber = randomNumberLessThanN(MAX_CHATS_IN_SINGLE_API_POLL + 1);
                let i = 0;
                while (randomNumber) {
                    setTimeout(addRandomChat, CONSECUTIVE_LIVECHATS_DELAY_MILLISECONDS * i);
                    i++;
                    randomNumber--;
                }
            }, LIVECHAT_POLLING_DELAY_MILLISECONDS)
        )

        return () => {
            console.log("hello")
            clearInterval(inter);
            dispatch(clearAllChats());
        }
    }, [isChatVisible]);


    return (
        <div className='w-11/12 flex-col m-auto'>
            {isChatVisible &&
                <div className='w-full h-max  my-4 p-3 rounded-lg  shadow-gray-700 shadow-inner '>
                    <div className='h-[480px] overflow-y-auto flex-col-reverse flex'>
                        <div className='flex flex-col'>
                            {chats.map((chat) => (
                                <LiveChat name={chat.name} message={chat.message} color={chat.color} />
                            ))
                            }
                        </div>
                    </div>
                    <div className='flex border-t-2 border-gray-200 p-2 mt-2 pt-4 w-full'>
                        <ProfileImage first_letter={"R"} color={colors[0]} size={"text-2xl"} />

                        <input type='text' className='w-full ml-2 mr-2 placeholder:text-gray-400 h-9 border-gray-300 border-2 rounded-full py-2 pr-3 pl-5 text-gray-700 focus:border-blue-600 focus:border-2 outline-none' placeholder='Chat...' value={chatTxt}
                            onChange={(e) => { setChatTxt(e.target.value) }}
                            onKeyDown={(event) => {
                                if (event.keyCode == ENTER_KEY_CODE && chatTxt !== "") {
                                    dispatch(addChat({ name: "Ritik", message: chatTxt, color: colors[0] }))
                                    setChatTxt("");
                                }
                            }}
                        ></input>

                        <button onClick={() => {
                            if (chatTxt !== "")
                                dispatch(addChat({ name: "Ritik", message: chatTxt, color: colors[0] }))
                            setChatTxt("");
                        }}>
                            <i className="fa fa-send-o fa-lg p-2 rounded-full bg-white border-2 border-black"></i>
                        </button>
                    </div>

                </div>}
            <button onClick={() => { setIsChatVisible(!isChatVisible) }} className='w-full rounded-md my-4 text-lg bg-gray-100 border-gray-400 border-2 px-2 py-1'>{isChatVisible ? "Hide " : "Show "} Chat</button>
        </div>
    )
}

export default LiveChatContainer