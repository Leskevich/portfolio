import React, {useState} from 'react';
import s from './project.module.css'
import {DescriptionProjectType} from "../project";

type ProjectType = {
    descriptionProject: DescriptionProjectType
}

export const Project = (props: ProjectType) => {
    const {title, description, style, linkCode, linkDemo} = props.descriptionProject

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
                    <div>
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

