import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/1f-Header/Header";
import {Home} from "./components/2f-Home/Home";
import {Navigate, Route, Routes} from "react-router-dom";
import {Skills} from "./components/3f-Skils/Skills";
import {Contacts} from "./components/6f-Contacts/Contacts";
import {Projects} from "./components/4f-Projects/project";
import {ContactForm} from "./components/6f-Contacts/ContactForm";
import {MyProject} from "./1a-bll/Project-State";
import {MySkills} from "./1a-bll/MySkilsState";
import {SideBare} from "./components/SideBare/SideBare";

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
    const [isOpenSideBar, setOpenSideBar] = useState(true)
    const closeSideBar = () => setOpenSideBar(false)
    const openCloseSideBar = () => setOpenSideBar((state) => !state)
    return (
        <div className={"App"}>
            <Header callback={openCloseSideBar}/>
            {isOpenSideBar && <SideBare isOpenSideBar={isOpenSideBar}  callback={closeSideBar}/>}
            <div>
                <Routes>
                    <Route path='/'
                           element={<Navigate to={'/home'}/>}
                    />
                    <Route path='/home'
                           element={<Home/>}
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
        </div>
    );
}

export default App;
