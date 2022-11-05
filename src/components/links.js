import { useState } from "react";
import { Link } from 'react-router-dom';
import Contact from "./contact";
export default function Buttonlink() {


    return (
        < div className="links" >

            <a href="https://training.zuri.team/" id="btn__zuri"


            >

                Zuri Team

            </a>

            <a href="http://books.zuri.team/" id="books" className="pyth" title="if you are looking for where to get quality resourses on design and coding, this is the right place"

            >
                Zuri Books

            </a>


            <a href="https://books.zuri.team/python-for-beginners?ref_id=adaking" id="book__python"
                className="book-pyth" title="This design book gives you guidelines on all that is needed of you to become a proffessional designer">

                Python Books

            </a>


            <a href="https://background.zuri.team/" id="pitch"
                className="code-check" title="if you are looking to hire programers for your project, this is a good place to find out information on who you are hiring"
            >

                Background Check for Coders

            </a>


            <a href="https://books.zuri.team/design-rules" id="books__design"
                className="book-design" title="This is a site where you can get free design books for any category of learners sponsored by Zuri">

                Design books
            </a>

            <a href="#/contact" id="contact" >
            
                  Contact Me
            </a>


            <div className="socials">
                <img src="images/slack.png" />
                <img src="images/gith.png" />
            </div>

        </div>
    )
}