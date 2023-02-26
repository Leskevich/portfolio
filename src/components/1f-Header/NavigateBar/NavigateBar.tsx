import React from 'react';
import s from "./NavigateBar.module.scss";
import {Links} from "../../../common/Links/Links";

export const NavigateBar = () => {
    return (
        <div className={s.nav}>
            <Links className={s.active}/>
        </div>
    );
};

