import React from 'react';
import s from './Skills.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/title/Title";
import {IconContext} from 'react-icons/lib';
import {SkillsType} from "../../App";


type SkillsPropsType = {
    skills: SkillsType[]
}
export const Skills = (props: SkillsPropsType) => {
    const {skills} = props

    return (
        <IconContext.Provider value={{className: s.reactIcons}}>
            <div className={s.sectionSkill}>
                <div className={s.skillsContainer}>
                    <Title title={'skills'}/>
                    <div className={s.skills}>
                        {skills.map(s => (
                            <Skill key={s.id} skill={s}/>
                        ))}
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
};

