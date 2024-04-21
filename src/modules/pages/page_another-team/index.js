"use strict";

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Main from "./main";

function AnotherTeam() {
    return (
        <div className="another-team">
                <Header/>
                <Main/>
                <Outlet/>
        </div>
    )
}

export default AnotherTeam;