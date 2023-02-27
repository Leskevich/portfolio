import React from 'react';
import s from './Home.module.scss'
import myPicture from '../../accets/img/Picture1.jpg'

export const Home = () => {
    return (
        <section className={s.ContainerMain}>
            <div className={s.main }>
                <div className={s.text}>
                    <span>hello,my name is</span>
                    <h1>artem leskevich</h1>
                    <span>Go to work</span>
                </div>
                    <img className={s.Picture}
                         src={myPicture}
                         alt="myPhoto"
                    />
            </div>
        </section>
    );
};

