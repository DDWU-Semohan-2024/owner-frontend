import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./member/Login";
import FindId from "./member/FindId";
import MyInfo from "./member/MyInfo";
import ResultId from "./member/ResultId";
import ViewMenu from "./member/ViewMenu";
import Main from "./member/Main";
import RestaurantInfo from "./member/RestaurantInfo";
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

            {/*<Route path="/" element={<Login />} /> /!* 기본적으로 /login으로 이동 *!/*/}
          </Routes>
        </Router>
    );
  }
}

export default App;