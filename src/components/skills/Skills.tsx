import React from 'react';
import s from './Skills.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/Components/Title/Title";

export type MySkills = {
    id: string
    title: string
    description: string
}

export const Skills = () => {
    const mySkills: MySkills[] = [
        {id: '1', title: 'HTML', description: 'Fundamentals HTML tags, form and validation, semantic HTML.'},
        {id: '2', title: 'CSS', description: 'Positioning, box modal, selectors, flexbox, media queries, transformation &amp; animation.'},
        {id: '3', title: 'JavaScript/TypeScript', description: 'Data types, basic syntax, functions, promises, scope, event loop, async/await.'},
        {id: '4', title: 'React', description: 'Class and functional components, state &amp; props, components life-cycle, routing, conditional rendering, HOC'},
        {id: '5', title: 'Redux', description: 'Actions &amp; thunks, reducer, context API, store, flux'},
        {id: '6', title: 'Rest API', description: 'HTTPS requests, URI parameters, Query parameters, status codes, axios library'},
        {id: '7', title: 'Version Control and Git', description: 'Creating new repositories, push- and pull-requets, merge, repos cloning'},
    ]
    return (
        <div className={s.sectionSkill}>
            <div className={s.skillsContainer}>
                <Title title={'skills'}/>
                <div className={s.skills}>
                    {mySkills.map(s => (
                        <Skill key={s.id} skill={s}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

