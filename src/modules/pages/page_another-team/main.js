"use strict";

import React from "react";

function Main(props){
    const {teamAvatar, teamDescr = "Here will be team description", personAvatar, personDescr = "Here will be person description"} = props;
    return(
        <main className="main">
            <div className="main__about-team bg-white w-11/12 p-8 mx-auto mt-24 rounded-3xl flex justify-around">
                <div className="">
                    <img src={teamAvatar} alt="Here will be team avatar"/>
                </div>
                <div className="">
                    <p>{teamDescr}</p>
                </div>
            </div>
            <div className="main__about-person bg-white w-11/12 p-8 mx-auto mt-24 rounded-3xl flex justify-around">
                <div className="main__about-person__tabs">
                    button1
                </div>
                <div className="flex justify-between mt-8">
                    <div><img src={personAvatar} alt="Here will be person avatar"/></div>
                    <div className="">
                        <p>{personDescr}</p>
                    </div>
                </div>
            </div>
        </main>
)
}

export default Main;