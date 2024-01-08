import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import store from './utility/store';
import { BrowserRouter, RouterProvider, createBrowserRouter} from "react-router-dom"
import MainContainer from './Components/MainContainer';
import VideoPlayer from './Components/VideoPlayer';
import SearchResult from './Components/SearchResult';
import VideoScreen from './Components/VideoScreen';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <BrowserRouter>
    
     </BrowserRouter>
     <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<> <Header/><Body/></>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<VideoScreen/>

      },
      {
        path:"/results",
        element:<SearchResult/>

      }

    ]
  },
])

export default App;
