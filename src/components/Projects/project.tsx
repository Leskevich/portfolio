import React from 'react';
import s from './projects.module.css'
import {Project} from "./Project/project";
import {Title} from "../common/Components/Title/Title";
import time from "../../accets/img/time.jpg"
import social from "../../accets/img/social.jpg"

type styleType = {
    backgroundImage: string
}
export type DescriptionProjectType = {
    id: string
    title: string
    description: string
    style: styleType
    linkCode: string
    linkDemo: string
}
export const Projects = () => {

    const todolistImg = {
        backgroundImage: `url(${time})`,
    }
    const socialImg = {
        backgroundImage: `url(${social})`,
    }

    const descriptionProject: DescriptionProjectType[] = [
        {
            id: '1',
            title: 'todolist',
            description: 'fadfdacdcacaadacdcda',
            style: todolistImg,
            linkCode: 'https://github.com/Leskevich/independentToDoList',
            linkDemo: ''
        }, {
            id: '2',
            title: 'social-network',
            description: 'fadfdacdcacaadacdcda',
            style: socialImg,
            linkCode: 'https://github.com/Leskevich/samurai-way-main',
            linkDemo: ''
        },
    ]


    return (
        <div className={s.sectionWorks}>
            <div className={s.containerWorks}>
                <Title title={'project'}/>
                <div className={s.works}>
                    {descriptionProject.map(pr => {
                        return (
                            <Project descriptionProject={pr}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

