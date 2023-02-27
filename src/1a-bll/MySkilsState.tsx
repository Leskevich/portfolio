import {RiPrinterCloudFill} from "react-icons/ri";
import {FiGitMerge} from "react-icons/fi";
import React from "react";
import {FaWpforms} from "react-icons/fa";
import { ImCss3 } from "@react-icons/all-files/im/ImCss3";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiPostman } from "@react-icons/all-files/si/SiPostman";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiRedux } from "@react-icons/all-files/si/SiRedux";


export type SkillsType = {
    icon: JSX.Element
    id: string
    title: string
    description: string
}

export const MySkills: SkillsType[] = [
    // {
    //     id: '1',
    //     titleComponent: 'HTML',
    //     description: 'Fundamentals HTML tags, form and validation, semantic HTML.',
    //     icon: <ImHtmlFive/>
    // },
    {
        id: '2',
        title: 'CSS/SCSS',
        description: 'Positioning, box modal, selectors, flexbox, media queries.',
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
        description: 'Class and functional components; props, components life-cycle, conditional rendering, hooks',
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
    },
    {
        id: '8',
        title: 'Postman',
        description: 'Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.',
        icon: <SiPostman/>
    },
    {
        id: '9',
        title: 'React Hook Form',
        description: 'Performant, flexible and extensible forms with easy-to-use validation.',
        icon: <FaWpforms/>
    },
    {
        id: '10',
        title: 'React Icons',
        description: 'Include popular icons in your React projects easily with react-icons.',
        icon: <SiReact/>
    },
]