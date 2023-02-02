import React from 'react';
import s from './projects.module.css'
import {Project} from "./Project/project";
import {Title} from "../common/Components/Title/Title";
import time from "../../accets/img/time1.jpg"

type styleType = {
    backgroundImage: string
}
export type DescriptionProjectType = {
    id: string,
    title: string,
    description: string,
    style: styleType
}
export const Projects = () => {

    const todolistImg = {
        backgroundImage: `url(${time})`,

    }

    const descriptionProject: DescriptionProjectType[] = [
        {
            id: '1',
            title: 'todolist',
            description: 'fadfdacdcacaadacdcda',
            style: todolistImg
        },  {
            id: '2',
            title: 'social-network',
            description: 'fadfdacdcacaadacdcda',
            style: todolistImg
        },
    ]


    return (
        <div className={s.sectionWorks}>
            <div className={s.containerWorks}>
                <Title title={'project'}/>
                <div className={s.works}>
                    {descriptionProject.map(pr=>{
                        return(
                            <Project descriptionProject={pr}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

