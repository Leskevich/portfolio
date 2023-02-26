import React from 'react';
import {Links} from "../../common/Links/Links";
import style from './SideBar.module.scss'

type SideBarType = {
    isOpenSideBar: boolean
    callback: () => void
}
export const SideBare = (props: SideBarType) => {
    const {callback, isOpenSideBar} = props
    return (
        <>
            {isOpenSideBar && <div className={style.substrate}
                                   onClick={callback}
            />}
            <div className={style.sideBar}>
                <nav className={style.nav}>
                    <Links className={style.active}
                           callback={callback}
                    />
                </nav>
            </div>
        </>
    );
};

