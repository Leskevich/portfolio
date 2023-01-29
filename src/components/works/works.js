import React from 'react';
import sContainer from './../common/styles/Container.module.css'
import s from './works.module.css'
import {Work} from "./work/work";
import {Title} from "../common/Components/Title/Title";

export const Works = () => {
    return (
        <div className={s.sectionWorks}>
            <div className={`${sContainer.container} ${s.containerWorks}`}>
             <Title title={'project'}/>
                <div className={s.works}>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    );
};

