"use strict";

import React from "react";
import { Outlet } from "react-router-dom";
import Main from "./main";

function Registration() {
    return (
        <div className="registration">
            <Main/>
            <Outlet/>
        </div>
    )
}

export default Registration;