import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Navigate, Route, Routes} from "react-router-dom";
import {Skills} from "./components/skills/Skills";
import {Contacts} from "./components/Contacts/Contacts";
import {Projects} from "./components/Projects/project";
import {ContactForm} from "./components/Contacts/ContactForm";
import {MyProject} from "./1a-bll/Project-State";
import {MySkills} from "./1a-bll/MySkilsState";

export type SkillsType = {
    icon: JSX.Element
    id: string
    title: string
    description: string
}
export type ProjectType = {
    id: string
    title: string
    description: string
    style: {
        backgroundImage: string
    }
    linkCode: string
    linkDemo: string
}

function App() {

    return (
        <div className={"App"}>
            <Header/>
            <Routes>
                <Route path='/'
                       element={<Navigate to={'/home'}/>}
                />
                <Route path='/home'
                       element={<Main/>}
                />
                <Route path='/skills'
                       element={<Skills skills={MySkills}/>}
                />
                <Route path='/project'
                       element={<Projects projects={MyProject}/>}
                />
                <Route path='/contact'
                       element={<Contacts/>}
                />
                <Route path='/form'
                       element={<ContactForm/>}
                />
            </Routes>
        </div>
    );
}

export default App;
