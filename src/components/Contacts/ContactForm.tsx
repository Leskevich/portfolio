import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import s from "./ContactForm.module.css"
import emailjs from '@emailjs/browser';


type IFormInputs = {
    user_name: string
    user_email: string
    message: string
}
export const ContactForm = () => {
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset,
    } = useForm<IFormInputs>({
        mode: "onBlur"
    })

    const onSubmit: SubmitHandler<IFormInputs> = data => {
        emailjs.send("service_i8x7t6k", "contact_form", data, "TEhFFC2y-U-IMUvOS")
        reset()
    }
    return (
        <div className={s.FormContainer}>
            <h3>SEND US A NOTE</h3>
            <form className={s.Form} onSubmit={handleSubmit(onSubmit)}>
                <input placeholder={"name"}
                       {...register("user_name", {
                               required: "Поле обязательно к заполнению",
                           minLength:{
                                   value:2,
                               message:"Имя не может содержать 1 символ."
                           }
                           }
                       )}
                />
                <div className={s.Errors}>
                    {errors?.user_name && <span>{errors.user_name?.message || "error"}</span>}
                </div>

                <input placeholder={"email"}
                       {...register("user_email", {
                           required: "Поле обязательно к заполнению",
                           pattern: {
                               value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                               message: 'Ведите корректный mail'
                           }
                       })}
                />
                <div className={s.Errors}>
                    {errors?.user_email && <span>{errors.user_email?.message || "error"}</span>}
                </div>

                <textarea placeholder={"message"}
                          {...register("message", {
                              required: "Поле обязательно к заполнению",
                              minLength: {
                                  value: 10,
                                  message: "Минимум 10 символов"
                              }
                          })
                          }
                />
                <div className={s.Errors}>
                    {errors?.message && <span className={s.Errors}>{errors.message?.message || "error"}</span>}
                </div>

                <button className={s.Button} disabled={!isValid} type="submit">Отправить</button>
            </form>
        </div>
    );
};
