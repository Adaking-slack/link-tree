
import contactCSS from "./contact.module.css"
import { useState } from "react"
import Footer from "./footer"
export default function Contact() {
    const [textarea, setTextarea] = useState()

    return (
        <div className={contactCSS.contactForm}>
            < div className={contactCSS.text}>
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <div className={contactCSS.Formbody}>
                <form>
                    < div className={contactCSS.formname}>
                        <label>
                            <p>First Name</p>

                            <input
                                name="first-name"
                                type="text"
                                id="first_name"
                             
                                placeholder="Enter your first name"
                            />
                        </label>

                        <label>
                            <p>Last Name</p>

                            <input name="Last-name"
                                type="text"
                                id="last_name"
                                placeholder="Enter your first name"

                            


                            />


                        </label>
                    </div>

                    < div className={contactCSS.text2}>
                        <label>
                            <p>Email</p>

                            <input name="email"
                                type="email"
                                id="email"
                                placeholder="yourname@email.com"

                                className={contactCSS.input}


                            />
                        </label>
                        
                        <label>

                            Message
                            <textarea value={textarea}
                                id="message"
                                placeholder="Send me a message and i will reply you"
                            />
                        </label>
              
          
                </div>

                <div className={contactCSS.last}>

                          <input type="checkbox"
                          className={contactCSS.checkbox}
                          />

                            <label className={contactCSS.checkboxText}>
                            You agree to providing your data to Adaeze who may contact you.                               
                       
                                
                                </label>
                          </div>
                   
                   
                   
                 <button id="btn__submit">Send message</button>
              
                </form>
            </div>

            
        </div>
    )
}