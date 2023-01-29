import React from 'react';
import s from './Navigate.module.css'
import {NavLink} from "react-router-dom";

export const Navigate = () => {
    return (
        <div className={s.NavigateContainer}>
            <NavLink className={s.Link} to="/home">home</NavLink>
            <NavLink className={s.Link} to="/skills">skills</NavLink>

            <a className={s.Link} href="">project</a>
            <a className={s.Link} href="">contact</a>
        </div>
    );
};

