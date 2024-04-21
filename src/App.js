"use strict";

import "./index";
import "./index.css"

import Normalize from 'react-normalize';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./modules/components/navbar";
import {
    Home,
    AnotherTeam,
    Login,
    Registration,
    Personal,
    Bg
} from "./modules/index";
import React from "react";

let navDisplay = "block";

function App() {
    return (
        <div className="App">
            <Normalize/>
            <Router>
                <Bg/>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/personal" element={<Personal/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/another-team" element={<AnotherTeam/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
