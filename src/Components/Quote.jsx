import  QuoteCSS from "/src/styles/Quote.module.css"

function Qoute (){
    return(
        <div className={QuoteCSS["Container"]}>
            <div className={QuoteCSS["Quote"]}>
                <h1 className={QuoteCSS["H1"]}>“The professional game is no longer dependent on physical ability alone but, more so than ever, on a player’s intelligence.”</h1>
                <p className={QuoteCSS["P"]}>-Sibusiso sibusiso, Founder of S.B Soccer Development</p>
                <img src="/Images/Face (1).png" alt="" className={QuoteCSS["Img"]}/>
            </div>
        </div>
    )
}
export default Qoute