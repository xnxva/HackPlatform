"use strict";

import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./header";
import Navbar from "./navbar";
import Main from "./main";

function Home() {
    return (
        <div className="home">
            <Header>
                <Navbar/>
                <Main/>
                <Outlet/>
            </Header>
        </div>
    )
}

export default Home;