import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import s from "./ContactForm.module.css"


type IFormInputs = {
    name: string
    email: string
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
        console.log(data)
        reset()
    }
    return (
        <div className={s.FormContainer}>
            <h3>SEND US A NOTE</h3>
            <form className={s.Form} onSubmit={handleSubmit(onSubmit)}>
                <input placeholder={"name"}
                       {...register("name", {
                           required: "Поле обязательно к заполнению",
                       })}
                />
                <div className={s.Errors}>
                    {errors?.name && <span>{errors.name?.message || "error"}</span>}
                </div>

                <input placeholder={"email"}
                       {...register("email", {
                           required: "Поле обязательно к заполнению",
                       })}
                />
                <div className={s.Errors}>
                    {errors?.email && <span>{errors.email?.message || "error"}</span>}
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

                <input disabled={!isValid} type="submit"/>
            </form>
        </div>
    );
};
