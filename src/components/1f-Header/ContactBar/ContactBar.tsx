import React from 'react';
import {AiFillGithub} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';
import {BsTelegram} from 'react-icons/bs';
import {SiCodewars} from 'react-icons/si';
import s from './ContactBar.module.scss'


export const ContactBar = () => {
    return (
        <div className={s.ContainerBar}>
            <a href={'https://github.com/Leskevich'}
               rel='noreferrer'
               target='_blank'

            >
                <AiFillGithub className={s.icon}/>
            </a>
            <a href={'https://www.linkedin.com/in/artem-leskevich-07105120a/'}
               rel='noreferrer'
               target='_blank'
            >
                <BsLinkedin className={s.icon} />
            </a>
            <a href={'https://www.codewars.com/users/leskevich'}
               rel='noreferrer'
               target='_blank'
            >
                <SiCodewars className={s.icon}/>
            </a>
            <a href={'https://t.me/leskevich'}
               rel='noreferrer'
               target='_blank'
            >
                <BsTelegram className={s.icon}/>
            </a>
        </div>
    );
};

