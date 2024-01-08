export const HAMBURGER_MENU_BUTTON_URL = "https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png";
export const APP_LOGO = "https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png"
export const SEARCH_ICON_URL = "https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png"
export const CREATE_ICON_URL = "https://static.thenounproject.com/png/4576699-200.png"
export const NOTIFICATION_ICON_URL = "https://cdn.pixabay.com/photo/2020/10/31/06/28/youtube-bell-icon-5700370_960_720.png"
export const USER_ICON_URL = "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
// export const API_KEY = "AIzaSyBbpFRtTzAuy7cQ3t9Yn4UBV2EGE_4R6rw"
export const API_KEY="AIzaSyDzVv6WyhAhiIgVfNoxhUVrE1a0HRbSQF0"
export const VIDEOS_LIST_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=500&regionCode=IN";


export const SIDEBAR_ARRAY = [

    {
        category: null,
        elements: [{

            name: "Home",
            imageUrl:"https://cdn-icons-png.flaticon.com/256/25/25694.png"

        },{

            name: "Shorts",
            imageUrl:"https://freelogopng.com/images/all_img/1685029929youtube-shorts-logo-black.png"

        },
        {

            name: "Subscriptions",
            imageUrl:"https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png"

        }
        ]

    }, {
        category: "You",
        elements: [{

            name: "Your Channel",
            imageUrl:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTviqXwnNcWduCzbY2kp6LsbDc4kQTfIjbkvm2grK5hjOR1VwHp"

        },{

            name: "History",
            imageUrl:"https://cdn3.iconfinder.com/data/icons/chat-ui-1-3/1024/history-512.png"

        },
        {

            name: "Your Videos",
            imageUrl:"https://static.thenounproject.com/png/1813969-200.png"

        }
        ]

    },{
        category: "Explore",
        elements: [{

            name: "Trending",
            imageUrl:"https://cdn1.iconfinder.com/data/icons/youtube-23/31/Subtract-14-512.png"

        },{

            name: "Shopping",
            imageUrl:"https://freepngdesign.com/content/uploads/images/shopping-bag-7511.png"

        },
        {

            name: "Music",
            imageUrl:"https://clipart-library.com/images/8TxrEKdoc.png"

        },
        {

            name: "Films",
            imageUrl:"https://static.thenounproject.com/png/1453914-200.png"

        },{

            name: "Live",
            imageUrl:"https://static-00.iconduck.com/assets.00/live-icon-512x376-swbqg3p5.png"

        },
        {

            name: "Gaming",
            imageUrl:"https://cdn-icons-png.flaticon.com/512/7708/7708371.png"

        },
        {

            name: "News",
            imageUrl:"https://static.thenounproject.com/png/518193-200.png"

        },{

            name: "Sport",
            imageUrl:"https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/champion-winner-trophy-icon.png"

        },
        {

            name: "Learning",
            imageUrl:"https://cdn-icons-png.flaticon.com/512/3521/3521848.png"

        },
        {

            name: "Fashion & Beauty",
            imageUrl:"https://www.shareicon.net/data/512x512/2016/04/24/754828_beauty_512x512.png"

        },{

            name: "Podcasts",
            imageUrl:"https://www.pinclipart.com/picdir/big/162-1622425_revue-de-bourbon-podcast-podcast-icon-black-and.png"

        },
        
        ]

    },
]
export const BUTTON_LIST_ARRAY=[
    "All","Mixes","Music","Lo-fi","Bollywood Music","Mantras","Bhavya Gandhi","Indian pop music","Soundtracks","Live","Satsang","Computer programming"]
export const LIKE_BUTTON_ICON_URL="https://www.pngitem.com/pimgs/m/129-1293150_file-like-svg-wikimedia-commons-png-youtube-blue.png";
export const DISLIKE_BUTTON_ICON_URL="https://www.pngkit.com/png/detail/116-1166751_dislike-icon-png.png"
export const SHARE_BUTTON_ICON_URL="https://www.kindpng.com/picc/m/237-2377534_transparent-share-button-png-black-arrow-curved-right.png"
export const DOWNLOAD_BUTTON_ICON_URL="https://cdn-icons-png.flaticon.com/512/156/156922.png";
export const convertData = (views) => {
    views = Number(views);
    if (views >= 1000000) {
      views = Math.round(views / 100000);
      views /= 10;
      return views + "M";
    }
    if (views >= 1000) {
      views = Math.round(views / 100);
      views /= 10;
      return views + "K";
    }
    return views;
  
  
  }

export const SEARCH_API_URL="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&regionCode=IN&type=video";
export const COMMENT_API_URL="https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies";