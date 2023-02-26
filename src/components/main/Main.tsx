import React from 'react';
import s from './Main.module.css'
import myPicture from '../../accets/img/Picture1.jpg'

export const Main = () => {
    return (
        <section className={s.main}>
            <div className={s.ContainerMain }>
                <div className={s.text}>
                    <span>hello,my name is</span>
                    <h1>artem leskevich</h1>
                    <span>Go to work</span>
                </div>
                <div>
                    <img className={s.Picture}
                         src={myPicture}
                         alt="myPhoto"
                    />
                </div>
            </div>
        </section>
    );
};

