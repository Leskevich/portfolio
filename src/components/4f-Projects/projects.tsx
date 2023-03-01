import React from 'react';
import s from './projects.module.scss'
import {Project} from "./Project/project";
import {Title} from "../../common/titleComponent/Title";
import {ProjectType} from "../../App";

type ProjectsPropsType = {
    projects: ProjectType[]
}
export const Projects = (props: ProjectsPropsType) => {
    const {projects} = props
    return (
        <div className={s.sectionWorks}>
            <Title title={'project'}/>
            <div className={s.works}>
                {projects.map(pr => <Project key={pr.id} project={pr}/>)}
            </div>
        </div>
    );
};

