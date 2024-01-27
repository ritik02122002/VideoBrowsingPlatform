import { Provider} from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import store from './utility/store';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainContainer from './Components/MainContainer';
import SearchResult from './Components/SearchResult';
import VideoScreen from './Components/VideoScreen';
import ChannelHomePage from './Components/ChannelHomePage';
import ChannelAbout from './Components/ChannelAbout';
import ChannelVideos from './Components/ChannelVideos';
import ChannelPlaylists from './Components/ChannelPlaylists';
import PlaylistVideosContainer from './Components/PlaylistVideosContainer';
import CategoryItem from './Components/CategoryItem';
import ErrorElement from './Components/ErrorElement';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <> <Header /><Body /></>,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/category/:categoryId",
        element: <CategoryItem />
      },
      {
        path: "/watch",
        element: <VideoScreen />,


      },
      {
        path: "/results",
        element: <SearchResult />

      },

      {
        path: "/channel/:channelId",
        element: <ChannelHomePage />,
        children: [{
          path: "about",
          element: <ChannelAbout />
        }, {
          path: "videos",
          element: <ChannelVideos />
        }, {
          path: "playlists",
          element: <ChannelPlaylists />,
          children: [{
            path: ":pid",
            element: <PlaylistVideosContainer/>
          }]
        }]

      }


    ]
  },
])

export default App;
