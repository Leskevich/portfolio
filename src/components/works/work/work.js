import React from 'react';
import s from './work.module.css'

export const Work = () => {
    return (
        <div className={s.work}>
            <div className={s.imgContainer}>
                <div className={s.button}>
                    <button>Смотреть</button>
                </div>
            </div>

                <h3 className={s.projectTitle}>Название проекта</h3>
                <div>Краткое описание:</div>
        </div>
    );
};

