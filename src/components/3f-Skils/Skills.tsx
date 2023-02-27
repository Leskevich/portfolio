import React from 'react';
import s from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/titleComponent/Title";

import {SkillsType} from "../../App";


type SkillsPropsType = {
    skills: SkillsType[]
}
export const Skills = (props: SkillsPropsType) => {
    const {skills} = props

    return (
        <div className={s.sectionSkill}>
            <Title title={'skills'}/>
            <div className={s.skills}>
                {skills.map(s => (
                    <Skill key={s.id} skill={s}/>
                ))}
            </div>
        </div>
    );
};

