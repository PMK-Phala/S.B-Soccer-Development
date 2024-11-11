import AboutCss from "/src/styles/About.module.css"
import { useState } from "react"

function About(){

    return(
        <div className={AboutCss["Container"]}>
            <div className={AboutCss["About-One"]}>
            <h1 className={AboutCss["HOne"]} >About Us</h1>
            </div>
            <div className={AboutCss["Picture"]}>
                <img src="/Images/8.jpeg" alt="" className={AboutCss["Img"]} />
            </div>
            <div className={AboutCss["About"]}>
                <h1 className={AboutCss["H1"]} >About Us</h1>
                <p className={AboutCss["P"]}> goal is to teach kids how fun soccer can be! We aim to teach and develop soccer skills to children in a safe and enjoyable environment. Founded in 2011, we have 12 years of experience in sharing our love of football with kids. Our programs are dynamic- growing and changing with us as we develop, ensuring children continue to love and enjoy this game.</p> 
            </div>
        </div>
    )
}
export default About