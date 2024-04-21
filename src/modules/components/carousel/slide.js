"use strict";

import React, {Component} from "react";
import {NavLink} from "react-router-dom";

function Slide(props){
    const {title, avatar} = props;
    return (
        <NavLink to="/another-team" className="carousel__item bg-black-transparent p-8 rounded-3xl" id="item-1">
            <img src={avatar} alt="team avatar"/>
            <div className="carousel__item-content">
                <h2>{title}</h2>
            </div>
        </NavLink>
    )
}

export default Slide;