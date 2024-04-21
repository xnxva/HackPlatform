"use strict";

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../page_home/header";
import Main from "./main";

function Personal() {
    return (
        <div className="personal">
            <Header>
                <Main/>
                <Outlet/>
            </Header>
        </div>
    )
}

export default Personal;