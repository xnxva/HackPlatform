"use strict";

import React, {Component} from "react";
import {NavLink} from "react-router-dom";

const Navbar = ()=> {
    let navClasses = ""

    return (
        <nav className="bg-black-transparent w-9/12 rounded-full mx-auto p-1.5">
            <div className="my-5 mx-2">
                <NavLink to={"/registration"} className="text-white text-lg rounded-full bg-tahiti py-5 px-8">Личный кабинет</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;