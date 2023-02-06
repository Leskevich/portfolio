import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Navigate, Route, Routes} from "react-router-dom";
import {Skills} from "./components/skills/Skills";
import {Contacts} from "./components/Contacts/Contacts";
import {ImCss3, ImHtmlFive} from "react-icons/im";
import {SiJavascript, SiPostman, SiReact, SiRedux} from "react-icons/si";
import {RiPrinterCloudFill} from "react-icons/ri";
import {FiGitMerge} from "react-icons/fi";
import time from "./accets/img/time.jpg";
import social from "./accets/img/social.jpg";
import {Projects} from "./components/Projects/project";
import {ContactForm} from "./components/Contacts/ContactForm";

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
    const skills: SkillsType[] = [
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
            title: 'Redux/Redux Toolkit',
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
            icon: <SiPostman/>
        },
    ]
    const Project: ProjectType[] = [
        {
            id: '1',
            title: 'todolist',
            description: 'fadfdacdcacaadacdcda',
            style: {
                backgroundImage: `url(${time})`,
            },
            linkCode: 'https://github.com/Leskevich/independentToDoList',
            linkDemo: ''
        }, {
            id: '2',
            title: 'social-network',
            description: 'fadfdacdcacaadacdcda',
            style: {
                backgroundImage: `url(${social})`,
            },
            linkCode: 'https://github.com/Leskevich/samurai-way-main',
            linkDemo: ''
        },
    ]


    return (
        <div className={"App"}>
            <Header/>
            <Routes>
                <Route path='/' element={<Navigate to={'/home'}/>}/>
                <Route path='/home' element={<Main/>}/>
                <Route path='/skills' element={<Skills skills={skills}/>}/>
                <Route path='/project' element={<Projects projects={Project}/>}/>
                <Route path='/contact' element={<Contacts/>}/>
                <Route path='/form' element={<ContactForm/>}/>

            </Routes>
        </div>
    );
}

export default App;
