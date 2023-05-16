import ExploreComponent from "./explore"
import HomeComponent from "./home";
import NavigationSideBar from "./navigation-sidebar"
import WhoToFollowList from "./who-to-follow-list"
import {Routes, Route} from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import whoReducer from "./reducers/who-reducer";
import { Provider } from "react-redux";
import tuitsReducer from "./tuits/tuits-reducer";
import NewHomeComponent from "./tuits/tuitsList";

const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer}}
)

function Tuiter() {
    return (
      <Provider store={store}>
          <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
              <NavigationSideBar active="home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                style={{"position": "relative"}}>
              <Routes>
                  <Route index element={<HomeComponent/>} />
                  <Route path="home" element={<NewHomeComponent/>}/>
                  <Route path="explore" element={<ExploreComponent/>}/>
              </Routes>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
              <WhoToFollowList/>
            </div>
          </div>
      </Provider>
      );

}

export default Tuiter