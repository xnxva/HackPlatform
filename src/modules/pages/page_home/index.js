"use strict";

import React from "react";
import {Outlet} from "react-router-dom";

import Header from "./header";
import Main from "./main";

function Home() {
    return (
        <div className="home">
            <Header/>
            <Main/>
            <Outlet/>
        </div>
    )
}

export default Home;