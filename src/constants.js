export const APP_LOGO = "https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png"
export const USER_ICON_URL = "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"

export const LINKEDIN_URL = "https://www.linkedin.com/in/ritikgoyal4019/"
export const LEETCODE_URL = "https://leetcode.com/ritik02122002/"
export const GITHUB_URL = "https://github.com/ritik02122002"
export const EMAIL_ID = "ritikgoyal4019@gmail.com"

export const SIDEBAR_ARRAY = [

    {
        category: null,
        elements: [{

            name: "Home",
            icon: "fa fa-home",
            to: "/"

        },
        ]

    }
    , {
        category: "Channels",
        elements: [{

            name: "Youtube",
            icon: "fa fa-youtube-play",
            to: "/channel/UCBR8-60-B28hp2BmDPdntcQ/about"

        }, {
            name: "Crazy XYZ",
            img: "https://yt3.ggpht.com/ytc/AIf8zZRRSqFs6BMu4JrKUKD2NqBKd6jLEZpoUeFsszIBsA=s800-c-k-c0x00ffffff-no-rj",
            to: "/channel/UCebC4x5l2-PQxg46Ucv9CsA/about"



        }]
    }, {
        category: "Explore",
        elements: [
            {

                name: "Music",
                icon: "fa fa-music",
                to: "/category/10"

            },
            {

                name: "Sports",
                icon: "fa fa-trophy",
                to: "/category/17"

            },
            {

                name: "Gaming",
                icon: "fa fa-gamepad",
                to: "/category/20"

            }, {

                name: "Science & Tech.",
                icon: "fa fa-laptop",
                to: "/category/28"

            }, {

                name: "Automobile",
                icon: "fa fa-car",
                to: "/category/2"

            },
            {

                name: "Entertainment",
                icon: "fa fa-play",
                to: "/category/24"

            },
            {

                name: "Film & Animation",
                icon: "fa fa-film",
                to: "/category/1"

            },
            {

                name: "News & Politics",
                icon: "fa fa-newspaper-o",
                to: "/category/25"

            },
            {

                name: "Pets & Animals",
                icon: "fa fa-paw",
                to: "/category/15"

            },
            {

                name: "Comedy",
                icon: "fa fa-smile-o",
                to: "/category/23"

            },
        ]

    },
]
export const BUTTON_LIST_ARRAY = ["All", "Mixes", "Music", "Lo-fi", "Bollywood Music", "Mantras", "Bhavya Gandhi", "Indian pop music", "Soundtracks", "Live", "Satsang", "Computer programming"]
export const nameList = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter", "Aman", "Rohit", "Shubham", "Purvi", "Saurav", "Sushil", "Amkit", "Nitin", "Deepak", "Raghavendra"]
export const colors = ['bg-red-700', "bg-green-700", "bg-blue-700", "bg-purple-700", "bg-orange-700", "bg-pink-700", "bg-amber-700", "bg-stone-700", "bg-lime-700", "bg-teal-700", "bg-yellow-800", "bg-indigo-700", "bg-cyan-700", "bg-rose-700"]


export const MAX_CHATS_IN_SINGLE_API_POLL = 5;
export const MAX_PLAYLIST_VIDEOS = 25;
export const DEBOUNCING_WAIT_TIME_MILLISEC=200;
export const SEARCHBAR_BLUR_DELAY_MILLISECONDS=500;
export const LIVECHAT_POLLING_DELAY_MILLISECONDS=2000;
export const CONSECUTIVE_LIVECHATS_DELAY_MILLISECONDS=200;
export const NETWORK_STATUS_VISIBLE_TIME_MILLISEC=3000;
export const ENTER_KEY_CODE=13
export const DEFAULT_LIVEVIDEO_QUERY_STRING="Shree Ram";
export const DEFAULT_CHAT_MESSAGE="Hey! I am ";


export const SEARCH_API_URL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=IN";
export const COMMENT_API_URL = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies";
export const CHANNEL_API_URL = "https://youtube.googleapis.com/youtube/v3/channels?part=brandingSettings%2C%20contentDetails%2C%20contentOwnerDetails%2C%20localizations%2C%20snippet%2C%20statistics%2C%20status%2C%20topicDetails"
export const SEARCH_SUGGESTIONS_API_URL = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt"
export const PLAYLIST_VIDEOS_API_URL = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus%2Cid&maxResults=25";
export const PLAYLIST_API_URL = "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&maxResults=25"
export const PARTICULAR_VIDEO_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics";
export const PARTICULAR_CHANNEL_API_URL = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics";
export const VIDEO_CATEGORIES_API_URL = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN"
export const VIDEOS_LIST_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN";






