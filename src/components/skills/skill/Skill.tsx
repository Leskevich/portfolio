import React from 'react';
import s from './Skill.module.css'
import {MySkills} from "../Skills";

type SkillProps = {
    skill: MySkills
}

export const Skill = (props: SkillProps) => {
    const {title, description} = props.skill
    return (
        <div className={s.skillContainer}>
            <div className={s.iconContainer}>
                <div className={s.icon}></div>
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

