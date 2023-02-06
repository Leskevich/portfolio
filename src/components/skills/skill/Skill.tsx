import React from 'react';
import s from './Skill.module.css'
import {SkillsType} from "../../../App";


type SkillProps = {
    skill: SkillsType
}

export const Skill = (props: SkillProps) => {
    const {title, description,icon} = props.skill
    return (
        <div className={s.skillContainer}>
            <div className={s.iconContainer}>
                    {icon}
            </div>
            <div className={s.descriptionContainer}>
                <h3 className={s.title}>
                    {title}
                </h3>
                <span className={s.description}>
                {description}
            </span>
            </div>
        </div>);
};

