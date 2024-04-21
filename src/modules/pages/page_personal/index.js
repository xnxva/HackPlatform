"use strict";

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./page_home/header";
import Navbar from "./page_home/navbar";
import Main from "./page_home/main";

function Personal() {
    return (
        <div className="personal">
            <Header>
                <Navbar/>
                <Main/>
                <Outlet/>
            </Header>
        </div>
    )
}

export default Personal;