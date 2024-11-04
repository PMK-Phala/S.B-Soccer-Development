import HeaderCSS  from "/src/styles/Header.module.css"
import { useContext, useState } from "react"
import { Link, Outlet } from "react-router-dom"

function Header(){

    const [toggle, setToggle] = useState(false)

    return(
        <>
        <header className={HeaderCSS["Container"]}>
        <Link to='/' className={HeaderCSS["Logo"]}>
            <img src="/public/Images/Logo.png" alt="" className={HeaderCSS["Logo-Img"]}/>
            <div className={HeaderCSS["Brand"]}>
                <h1 className={`${HeaderCSS.Text} ${HeaderCSS.Sb}`}>S.B</h1>
                <h1 className={`${HeaderCSS.Text} ${HeaderCSS.Soccer}`}>Soccer</h1>
                <h1 className={`${HeaderCSS.Text} ${HeaderCSS.Development}`}>Development</h1>
            </div>
        </Link>
        <div className={HeaderCSS["Nav"]}>
            <Link to='/' className={HeaderCSS["Option"]}><h1 className={`${HeaderCSS.Content} ${HeaderCSS.Home}` }> Home</h1></Link>
            <Link to='/Training' className={HeaderCSS["Option"]}><h1 className={`${HeaderCSS.Content} ${HeaderCSS.Training}`}>Our Training</h1></Link>
            <Link to='/Contact' className={HeaderCSS["Option"]}><h1 className={`${HeaderCSS.Content} ${HeaderCSS.Contact}`} onClick={()=>{ setToggle(true)}}>Contact Us</h1></Link>
            <Link to='/Join' className={HeaderCSS["Option"]}><button className={`${HeaderCSS.Content} ${HeaderCSS.Academy}`} onClick={()=>{setToggle(false)}}> Join The Academy </button></Link>
        </div>
        </header>

        </>
    )
}
export default Header