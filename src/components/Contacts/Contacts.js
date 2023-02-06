import React from 'react';
import s from './Contacts.module.css'
import {Title} from "../../common/components/title/Title";
import {ContactForm} from "./ContactForm";

export const Contacts = () => {
    return (
        <div className={s.sectionContacts}>
            <Title title={'Get in Touch'}/>
            <div className={s.contactContainer}>
                <div className={s.descriptionContainer}>
                    <span>CONNECT WITH ME VIA PHONE</span>
                    <span>+37529 205 39 75</span>
                    <span>leskevichtema@gmail.com</span>
                </div>
                <ContactForm/>
            </div>
        </div>
    );
};

