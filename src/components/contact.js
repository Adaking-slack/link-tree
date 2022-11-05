
import contactCSS from "./contact.module.css"
import React, { useState } from "react"
import { useForm } from "react-hook-form";
import { redirect } from "react-router-dom";


export default function Contact() {
    const [textarea, setTextarea] = useState()

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange'
    });


    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }


    return (
        <div className={contactCSS.contactForm}>
            < div className={contactCSS.text}>
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <div className={contactCSS.Formbody}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    < div className={contactCSS.formname}>
                        <label>
                            <p>First Name</p>

                            <input
                                name="first-name"
                                type="text"
                                id="first_name"
                                {...register("firstName", { required: true, maxLength: 10 })}
                                className={contactCSS.input}
                                placeholder="Enter your first name"
                            />
                            
                                {errors.firstName && <p className={contactCSS.textError}>Please enter your First Name </p>}

                         
                        </label>
                        <label>
                            <p>Last Name</p>

                            <input name="Last-name"
                                type="text"
                                id="last_name"
                                placeholder="Enter your Last name"
                                {...register("lastName", { required: true, maxLength: 10 })}




                            />

                            {errors.firstName && <p className={contactCSS.textError}>Please enter your last Name</p>}


                        </label>
                    </div>

                    < div className={contactCSS.text2}>
                        <label>
                            <p>Email</p>

                            <input name="email"
                                type="email"
                                id="email"
                                placeholder="yourname@email.com"
                                {...register("email",
                                    {
                                        required: true,
                                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    })}
                                className={contactCSS.input}

                            />
                        </label>
                        {errors.email && <p className={contactCSS.textError}>Please enter a valid email</p>}

                        <label>

                            Message
                            <textarea value={textarea}
                                id="message"
                                placeholder="Send me a message and i will reply you"
                                {...register("text", { required: true, maxLength: 10 })}
                                    

                            />
                        </label>
                        {errors.text && <p className={contactCSS.textError}>Please enter a message</p>}


                    </div>

                    <div className={contactCSS.last}>

                        <input type="checkbox"
                            className={contactCSS.checkbox}
                        />

                        <label className={contactCSS.checkboxText}>
                            You agree to providing your data to Emelike  Adaeze who may contact you.


                        </label>
                    </div>



                    <button id="btn__submit" type="submit" >Send message</button>

                </form>
            </div>


        </div>
    )
}