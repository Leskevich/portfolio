import React from 'react';
import s from './Title.module.css'

type TitleType={
    title:string
}

export const Title = (props:TitleType) => {
    const {title}=props
    return (
        <div>
            <div className={s.title}>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

