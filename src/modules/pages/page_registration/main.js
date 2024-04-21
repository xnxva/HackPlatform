"use strict";

import React from "react";
import {NavLink} from "react-router-dom";

function Main() {
    return (
        <main className="main">
            <div className="w-11/12 bg-white p-8 mx-auto mt-24 rounded-3xl text-center">
                <h4>Регистрация</h4>
                <form className="flex flex-col" action="#">
                    <label htmlFor="teamLogin">Название команды</label> <input id="teamLogin" type="text" placeholder="Введите название команды"/>
                    <label htmlFor="teamAvatar">Баннер</label> <input id="teamAvatar" type="image" placeholder="Выбрать изображение" alt="teamAvatar"/>
                    <button id="newMemberBtn" type="button">Добавить участника</button>
                    <label htmlFor="email">Электронная почта</label> <input id="email" placeholder="Введите email"/>
                    <label htmlFor="memberLogin">Логин</label> <input id="memberLogin" type="text" placeholder="Введите логин"/>
                    <label htmlFor="password">Пароль</label> <input id="password" type="password" placeholder="Введите пароль"/>

                    <NavLink to="/personal" className="uppercase" type="submit">Зарегистрировать</NavLink>
                </form>
            </div>
        </main>
    )
}

export default Main;