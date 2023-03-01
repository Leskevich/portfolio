import time from "../accets/img/time.jpg";
import social from "../accets/img/social.jpg";
import count from "../accets/img/count.png";
import {ProjectType} from "../App";

export const MyProject: ProjectType[] = [
    {
        id: '1',
        title: 'todolist',
        description: 'Educational project: Technology stack: react, redux, react-redux, redux-thunk, typescript, react-router-dom, axios, redux-form, reselect, material UI',
        style: {
            backgroundImage: `url(${time})`,
        },
        linkCode: 'https://github.com/Leskevich/independentToDoList',
        linkDemo: 'https://leskevich.github.io/independentToDoList/'
    },
    {
        id: '2',
        title: 'social-network',
        description: '' +
            'Educational project: Technology stack: react, redux, react-redux, redux-thunk, typescript, react-router-dom, axios, redux-form, reselect, material UI',
        style: {
            backgroundImage: `url(${social})`,
        },
        linkCode: 'https://github.com/Leskevich/samurai-way-main',
        linkDemo: 'https://github.com/Leskevich/samurai-way-main'
    },
    {
        id: '3',
        title: 'count',
        description: 'Educational project: Technology stack: react, redux, react-redux, redux-thunk, typescript, react-router-dom, axios, redux-form, reselect, material UI',
        style: {
            backgroundImage: `url(${count})`,
        },
        linkCode: 'https://github.com/Leskevich/advanced-counter',
        linkDemo: 'https://leskevich.github.io/advanced-counter/'
    },
]