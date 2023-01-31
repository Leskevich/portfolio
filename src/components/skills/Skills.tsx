import React from 'react';
import s from './Skills.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/Components/Title/Title";
import {ImCss3, ImHtmlFive} from 'react-icons/im'
import {RiPrinterCloudFill} from 'react-icons/ri'
import {FiGitMerge} from 'react-icons/fi'
import {SiJavascript,SiReact,SiRedux} from 'react-icons/si'

import {IconContext} from 'react-icons/lib';

export type MySkills = {
    icon: JSX.Element
    id: string
    title: string
    description: string
}

export const Skills = () => {
    const mySkills: MySkills[] = [
        {
            id: '1',
            title: 'HTML',
            description: 'Fundamentals HTML tags, form and validation, semantic HTML.',
            icon: <ImHtmlFive/>
        },
        {
            id: '2',
            title: 'CSS',
            description: 'Positioning, box modal, selectors, flexbox, media queries, transformation &amp; animation.',
            icon: <ImCss3/>
        },
        {
            id: '3',
            title: 'JavaScript/TypeScript',
            description: 'Data types, basic syntax, functions, promises, scope, event loop, async/await.',
            icon: <SiJavascript/>
        },
        {
            id: '4',
            title: 'React',
            description: 'Class and functional components, state &amp; props, components life-cycle, routing, conditional rendering, HOC',
            icon: <SiReact/>
        },
        {
            id: '5',
            title: 'Redux',
            description: 'Actions &amp; thunks, reducer, context API, store, flux',
            icon: <SiRedux/>
        },
        {
            id: '6',
            title: 'Rest API',
            description: 'HTTPS requests, URI parameters, Query parameters, status codes, axios library',
            icon: <RiPrinterCloudFill/>
        },
        {
            id: '7',
            title: 'Version Control and Git',
            description: 'Creating new repositories, push- and pull-requets, merge, repos cloning',
            icon: <FiGitMerge/>
        }, {
            id: '8',
            title: 'Postman',
            description: ' Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.',
            icon: <FiGitMerge/>
        },
    ]
    return (
        <IconContext.Provider value={{ className: s.reactIcons }}>
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
        </IconContext.Provider>
    );
};

