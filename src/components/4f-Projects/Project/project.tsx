import React, {useState} from 'react';
import s from './project.module.scss'
import {ProjectType} from "../../../App";


type ProjectPropsType = {
    project: ProjectType
}

export const Project = (props: ProjectPropsType) => {
    const {title, description, style, linkCode, linkDemo} = props.project
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const onMouseEnterHandler = () => {
        setIsVisible(true)
    }
    const onMouseLeaveHandler = () => {
        setIsVisible(false)
    }
    return (
        <div className={s.workContainer}
             onMouseEnter={onMouseEnterHandler}
             onMouseLeave={onMouseLeaveHandler}>
            <div className={s.imgContainer} style={style}>
                <div className={s.descriptionContainer}>
                    <div className={s.title}>
                        {title}
                    </div>
                    {isVisible && <div>{description}</div>}
                    <div className={s.buttonContainer}>
                        <a href={linkDemo}
                           className={s.button}
                           target='_blank'
                           rel='noreferrer'> DEMO </a>
                        <a href={linkCode}
                           className={s.button}
                           target='_blank'
                           rel='noreferrer'> CODE </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

