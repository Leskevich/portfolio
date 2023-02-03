import React from 'react';
import s from './Contacts.module.css'
import {Title} from "../common/Components/Title/Title";

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
                <div className={s.formContainer}>
                    <form action="" className={s.form}>
                        <span>SEND US A NOTE</span>
                        <div className={s.fieldsContainer}>
                            <input type="text" className={s.field}/>
                            <input type="text" className={s.field}/>
                        </div>
                        <textarea className={s.fieldText}></textarea>
                        <button className={s.button}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

