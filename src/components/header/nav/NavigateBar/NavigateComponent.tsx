import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Navigate.module.css";


type NavigateComponentType = {
    closeBurger?: () => void
}
export const NavigateComponent = (props: NavigateComponentType) => {
    const {closeBurger} = props
    return (
        <>
            <NavLink onClick={closeBurger} className={s.Link} to="/home">home</NavLink>
            <NavLink onClick={closeBurger} className={s.Link} to="/skills">skills</NavLink>
            <NavLink onClick={closeBurger} className={s.Link} to="/project">project</NavLink>
            <NavLink onClick={closeBurger} className={s.Link} to="/contact">contact</NavLink>
        </>
    );
};

