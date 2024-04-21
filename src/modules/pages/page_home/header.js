"use strict";

import React, {Component} from "react";

const Header = ({children}) => {
    return (
        <header className="pt-4">
            {children}
        </header>
    )
}
export default Header;