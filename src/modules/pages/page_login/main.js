"use strict";

import React from "react";
import {NavLink} from "react-router-dom";

function Main() {
    return (
        <main className="main">
            <div className="w-11/12 bg-white p-8 mx-auto mt-24 rounded-3xl text-center">
                <h4>Вход в личный кабинет</h4>
                <form className="flex flex-col" action="#">
                    <label htmlFor="login">Логин</label> <input id="login" type="text" placeholder="Введите логин"/>
                    <label htmlFor="password">Пароль</label> <input id="password" type="password" placeholder="Введите пароль"/>
                    <NavLink to="/personal" className="uppercase" type="submit">Войти</NavLink>
                </form>
                <NavLink to="/registration">Регистрация</NavLink>
            </div>
        </main>
    )
}

export default Main;