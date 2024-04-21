"use strict";

import React from "react";
import { Outlet } from "react-router-dom";

import Main from "./main";

function Login() {
    return (
        <div className="home">
                <Main/>
                <Outlet/>
        </div>
    )
}

export default Login;