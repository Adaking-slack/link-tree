import { useState } from "react";

export default function Link() {
    const [isHovering, setIsHovering] = useState(false);
    const [pythonHover, setPythonHover] = useState(false)
    const [designHover, setDesignHover] = useState(false)
    const [codeHover, setCodeHover] = useState(false)

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);

    }


    const hoverMouseOver = () => {
        setPythonHover(true)
    };

    const hoverMouseOut = () => {
        setPythonHover(false)
    }

    const DesignMouseOver = () => {

        setDesignHover(true)
    };

    const DesignMouseOut = () => {
        setDesignHover(false)
    }


    const codeMouseOver = () => {

        setCodeHover(true)
    };

    const codeMouseOut = () => {
        setCodeHover(false)
    };


    return (
        < div className="links" >

            <a href="https://training.zuri.team/" id="btn__zuri"

            >

                Zuri Team

            </a>

            <a href="http://books.zuri.team/" id="books" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
                className="pyth"
            >
                <div className="hover">
                    {isHovering && <h3>if you are looking for where to get quality resourses on design and coding, this is the right place</h3>}
                </div>

                Zuri Books

            </a>


            <a href="https://books.zuri.team/python-for-beginners?ref_id=adaking" id="book__python" onFocus={hoverMouseOver} onMouseOut={hoverMouseOut}
                className="book-pyth">
                <div className="hover">
                    {pythonHover && <h3>This design book gives you guidelines on all that is needed of you to become a proffessional designer</h3>}
                </div>
                Python Books

            </a>


            <a href="https://background.zuri.team/" id="pitch" onMouseOver={codeMouseOver} onMouseOut={codeMouseOut}
            className="code-check"
            >
<div className="hover">
    {codeHover && <h3>if you are looking to hire programers for your project, this is a good place to find out information on who you are hiring</h3>}
</div>
                Background Check for Coders

            </a>


            <a href="https://books.zuri.team/design-rules" id="books__design" onMouseOver={DesignMouseOver} onMouseOut={DesignMouseOut}
                className="book-design">
                <div className="hover">
                    {designHover && <h3>This is a site where you can get free design books for any category of learners sponsored by Zuri</h3>}
                </div>
                Design books
            </a>


            <div className="socials">
                <img src="images/slack.png" />
                <img src="images/gith.png" />
            </div>

        </div>
    )
}