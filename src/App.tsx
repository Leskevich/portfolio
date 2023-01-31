import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Navigate, Route, Routes} from "react-router-dom";
import {Skills} from "./components/skills/Skills";

function App() {
    return (
        <div className={"App"}>
            <Header/>
            <Routes>
                <Route path='/' element={<Navigate to={'/home'}/>}/>
                <Route path='/home' element={<Main/>}/>
                <Route path='/skills' element={<Skills/>}/>
            </Routes>
        </div>
    );
}

export default App;
