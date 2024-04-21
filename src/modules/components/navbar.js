"use strict";

import React, {Component} from "react";

import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    const {display} = props;
    let Nav = <nav className="bg-black-transparent w-9/12 rounded-full mx-auto p-1.5">
        <div className="my-5 mx-2">
            <NavLink to="/login" className="text-white text-lg rounded-full bg-tahiti hover:bg-tahiti-dark py-5 px-8 {display}">Личный
                кабинет
            </NavLink>
        </div>
    </nav>;

    if(display === "none"){
        Nav.props.className = Nav.props.className + "none";
    }
    return (
        Nav
    )
}

export default Navbar;