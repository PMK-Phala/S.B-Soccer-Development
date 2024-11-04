import AboutCss from "/src/styles/About.module.css"
import { useState } from "react"

function About(){

    const[display, setDisplay]=useState(false)

    return(
        <div className={AboutCss["Container"]}>
            <div className={AboutCss["Picture"]}>
                <img src="/Images/8.jpeg" alt="" className={AboutCss["Img"]}/>
            </div>
            <div className={AboutCss["About"]}>
                <h1 className={AboutCss["H1"]}>About Us</h1>
                <p className={AboutCss["P"]}> goal is to teach kids how fun soccer can be! We aim to teach and develop soccer skills to children in a safe and enjoyable environment. Founded in 2011, we have 12 years of experience in sharing our love of football with kids. Our programs are dynamic- growing and changing with us as we develop, ensuring children continue to love and enjoy this game.</p> 
                { display ? <p className={AboutCss["P"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, omnis nihil, repellendus illum vitae sunt deserunt ratione voluptatum quae atque dolorem. Laboriosam omnis cupiditate sapiente tempore accusamus commodi est quas?</p> : "" }
                <button className={AboutCss["Button"]} onClick={()=>{setDisplay(!display)}}>{display? "Close" :"Read more"}</button>
            </div>
        </div>
    )
}
export default About