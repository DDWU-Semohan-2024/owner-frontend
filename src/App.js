import './App.css';
import React, { Component } from "react";
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./member/Login";
import FindId from "./member/FindId";
import MyInfo from "./member/MyInfo";
import ResultId from "./member/ResultId";
import ViewMenu from "./member/ViewMenu";
import Main from "./member/Main";
import RestaurantInfo from "./member/RestaurantInfo";
import UpdateRestaurant from "./member/UpdateRestaurant";
import UpdateMenu from "./member/UpdateMenu";
import UpdateInfo from "./member/UpdateInfo";
import ResetPassword from "./member/ResetPassword";
import GeneratePassword from "./member/GeneratePassword";
import ComingSoon from "./member/ComingSoon";
import RegisterMenu from "./member/RegisterMenu";

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
          </Routes>
        </Router>
    );
  }
}


export default App;
