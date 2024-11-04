import JoinCSS from "/src/styles/Join.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

function Join(){
    return(
        <div className={JoinCSS["Main"]}>
            <div className={JoinCSS["Join"]}>
                <h1 className={`${JoinCSS.Text} ${JoinCSS.Heading}`}>Nurting Talent</h1>
                <p className={`${JoinCSS.Text} ${JoinCSS.Paragraph}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, facilis sequi et ullam eos culpa error quaerat est quasi voluptatum quia? Fugiat doloremque quod vel alias unde delectus quis aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae distinctio neque aspernatur ad? Similique, quod? Non id reprehenderit fugit impedit ab error dignissimos? </p>
                <Link to='/Contact'><button className={`${JoinCSS.Text} ${JoinCSS.Button}`}>Join Now </button></Link>
               
            </div>
        </div>
    )
}
export default Join