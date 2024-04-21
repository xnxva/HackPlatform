"use strict";

import React from "react";
import Slide from "./slide";
import Button from "../button";

let firstTeamAvatar,
    firstTeamTitle = "First Team",
    secondTeamAvatar,
    secondTeamTitle = "Second Team",
    thirdTeamAvatar,
    thirdTeamTitle = "Third Team";

function Carousel() {
    return (
        <div className="carousel">
            <div className="carousel-wrapper flex justify-between">
                <Slide title={firstTeamTitle} avatar={firstTeamAvatar}/>
                <Slide title={secondTeamTitle} avatar={secondTeamAvatar}/>
                <Slide title={thirdTeamTitle} avatar={thirdTeamAvatar}/>
            </div>
            <div className="carousel__button-wrapper flex justify-center gap-8 mt-10">
                <Button title="Back"></Button>
                <Button title="Next"></Button>
            </div>
        </div>
    )
}

export default Carousel;