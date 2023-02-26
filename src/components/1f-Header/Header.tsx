import React from 'react';
import s from './Header.module.scss'
import {ContactBar} from "./ContactBar/ContactBar";
import {NavigateBar} from "./NavigateBar/NavigateBar";
import {GiHamburgerMenu} from '@react-icons/all-files/gi/GiHamburgerMenu';

type HeaderType = {
    callback: () => void
}
export const Header = (props: HeaderType) => {
    const {callback} = props
    return (
        <div className={s.header}>
            <div className={s.mobileNavigation}>
                <GiHamburgerMenu className={s.burger}
                                 onClick={callback}
                />
            </div>
            <div className={s.desktopNavigation}>
                <NavigateBar/>
            </div>

            <ContactBar/>
        </div>
    );
};

