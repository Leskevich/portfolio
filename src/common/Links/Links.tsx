import React from 'react';
import {NavLink} from "react-router-dom";

type NavigatePropsType = {
    className: string
    callback?:()=>void
}

export const Links = (props: NavigatePropsType) => {
    const {className,callback} = props

    return (
        <>
            <NavLink to="/home"
                     onClick={callback}
                     className={({isActive}) => isActive ? className : ''}
            >
                home
            </NavLink>
            <NavLink to="/skills"
                     onClick={callback}
                     className={({isActive}) => isActive ? className : ''}
            >
                skills
            </NavLink>
            <NavLink to="/project"
                     onClick={callback}
                     className={({isActive}) => isActive ? className : ''}
            >
                project
            </NavLink>
            <NavLink to="/contact"
                     onClick={callback}
                     className={({isActive}) => isActive ? className : ''}
            >
                contact
            </NavLink>
        </>
    );
};




