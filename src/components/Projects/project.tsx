import React from 'react';
import s from './projects.module.css'
import {Project} from "./Project/project";
import {Title} from "../../common/components/title/Title";
import {ProjectType} from "../../App";

type ProjectsPropsType = {
    projects: ProjectType[]
}
export const Projects = (props: ProjectsPropsType) => {
    const {projects} = props
    return (
        <div className={s.sectionWorks}>
            <div className={s.containerWorks}>
                <Title title={'project'}/>
                <div className={s.works}>
                    {projects.map(pr => <Project key={pr.id} project={pr}/>)}
                </div>
            </div>
        </div>
    );
};

