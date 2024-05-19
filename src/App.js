import './App.css';
import React, { Component } from "react";
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import NewPassword from "./member/NewPassword";

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
            <Route exact path="/updateInfo" element={<UpdateInfo />} />
            <Route exact path="/newPassword" element={<NewPassword />} />
            <Route exact path="/updateRestaurant" element={<UpdateRestaurant />} />


            {/*<Route path="/" element={<Login />} /> /!* 기본적으로 /login으로 이동 *!/*/}
          </Routes>
        </Router>
    );
  }
}


export default App;
