import './App.css';
import React, { Component } from "react";
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./pages/Login";
import FindId from "./pages/FindId";
import MyInfo from "./pages/MyInfo";
import ResultId from "./pages/ResultId";
import ViewMenu from "./pages/ViewMenu";
import Main from "./pages/Main";
import RestaurantInfo from "./pages/RestaurantInfo";
import UpdateRestaurant from "./pages/UpdateRestaurant";
import UpdateMenu from "./pages/UpdateMenu";
import UpdateInfo from "./pages/UpdateInfo";
import ResetPassword from "./pages/ResetPassword";
import GeneratePassword from "./pages/GeneratePassword";
import ComingSoon from "./pages/ComingSoon";
import RegisterMenu from "./pages/RegisterMenu";
import StaticChart from "./pages/MenuChartStatic";
import StaticGraph from "./pages/MenuGraphStatic";
import StaticCircle from "./pages/MenuCircleStatic";
import SmartRecommend from "./pages/smartRecommend";

class App extends Component {
  render() {
    return (
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/findId" element={<FindId />} />
            <Route exact path="/restaurantInfo" element={<RestaurantInfo />} />
            <Route exact path="/main" element={<Main />} />
            <Route exact path="/myInfo" element={<MyInfo />} />
            <Route exact path="/resultId" element={<ResultId />} />
            <Route exact path="/viewMenu" element={<ViewMenu />} />

            <Route exact path="/updateMenu" element={<UpdateMenu />} />
            <Route exact path="/updateMenu/:id" component={UpdateMenu} />

            <Route path="/updateMenu/:id" element={<UpdateMenu />} />
            <Route exact path="/registerMenu" element={<RegisterMenu />} />

            <Route exact path="/updateInfo" element={<UpdateInfo />} />
            <Route exact path="/resetPassword" element={<ResetPassword />} />
            <Route exact path="/updateRestaurant" element={<UpdateRestaurant />} />
            <Route exact path="/generatePassword" element={<GeneratePassword />} />
            <Route exact path="/comingSoon" element={<ComingSoon />} />
            {/*<Route path="/" element={<Login />} /> /!* 기본적으로 /login으로 이동 *!/*/}

            <Route exact path="/staticChart" element={<StaticChart />} />
            <Route exact path="/staticGraph" element={<StaticGraph />} />
            <Route exact path="/staticCircle" element={<StaticCircle />} />

            <Route exact path="/smartRecommend" element={<SmartRecommend />} />
          </Routes>
        </Router>
    );
  }
}


export default App;
