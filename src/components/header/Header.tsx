import React from 'react';
import s from './Header.module.css'
import {Navigate} from "./nav/Navigate";
import {ContactBar} from "./nav/ContactBar/ContactBar";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.HeaderContainer}>
                <Navigate/>
                <ContactBar/>
            </div>
        </div>
    );
};

