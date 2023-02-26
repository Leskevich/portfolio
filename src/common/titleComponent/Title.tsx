import React from 'react';
import style from './Title.module.scss'

type TitleType={
    title:string
}

export const Title = (props:TitleType) => {
    const {title}=props
    return (
        <div>
            <div className={style.title}>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

