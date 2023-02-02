import React from 'react';
import s from './project.module.css'
import {DescriptionProjectType} from "../project";

type ProjectType = {
    descriptionProject: DescriptionProjectType
}

export const Project = (props: ProjectType) => {
    const {title, description, style} = props.descriptionProject
    return (
        <div className={s.workContainer}>
            <div className={s.imgContainer} style={style}>
                <div className={s.descriptionContainer}>
                    <div>{title}</div>
                    <div>
                        {description}
                    </div>
                    <div className={s.buttonContainer}>
                        <button className={s.button}>+++</button>
                        <button className={s.button}>---</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

