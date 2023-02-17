import React, {useState} from 'react';
import s from './Navigate.module.css'
import {GiHamburgerMenu} from 'react-icons/gi';
import {NavigateComponent} from "./NavigateComponent";

export const Navigate = () => {
    const [open, setOpen] = useState<boolean>(false)
    const openBurger = () => setOpen(state => !state);
    const closeBurger = () => setOpen(false)
    return (
        <div>
            <GiHamburgerMenu
                onClick={openBurger}
                className={s.icon}
            />
            {open && <div className={s.BurgerMenu}>
                <NavigateComponent closeBurger={closeBurger}/>
                <div className={s.Substrate} onClick={openBurger}/>
            </div>
            }
            <div className={s.NavigateBar}>
                <NavigateComponent/>
            </div>
        </div>
    );
};


export const Substrate = () => {
    return
}

