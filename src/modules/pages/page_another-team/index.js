"use strict";

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/page_another-team/header";
import Navbar from "../components/page_another-team/navbar";
import Main from "../components/page_another-team/main";

function AnotherTeam() {
    return (
        <div className="another-team">
            <Header>
                <Navbar/>
                <Main/>
                <Outlet/>
            </Header>
        </div>
    )
}

export default AnotherTeam;