import React from 'react';
import s from './works.module.css'
import {Work} from "./work/work";
import {Title} from "../common/Components/Title/Title";

export const Works = () => {
    return (
        <div className={s.sectionWorks}>
            <div className={s.containerWorks}>
             <Title title={'project'}/>
                <div className={s.works}>
                    <Work/>
                    <Work/>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    );
};

