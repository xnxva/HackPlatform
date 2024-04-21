"use strict";

import React, {Component} from "react";

function Button(props){
    const {title} = props;
    return(
        <button type="button" className="text-white text-lg rounded-full bg-tahiti hover:bg-tahiti-dark py-3 px-8">
            {title}
        </button>

    )
}

export default Button;