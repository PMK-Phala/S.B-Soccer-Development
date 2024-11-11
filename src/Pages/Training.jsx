import Header from "../Components/Header"
import TrainingCSS from "/src/styles/Training.module.css"

function Training(){
    return(
        <>
        <Header/>
        <div className={TrainingCSS["Container"]}>
            <header className={TrainingCSS["Header"]}>
                <h1>Our Training</h1>
            </header>
            <div className={TrainingCSS["Services"]}>
                <div className={TrainingCSS["Skills"]}>
                    <div className={TrainingCSS["Text"]}>
                        <h1 className={TrainingCSS["Text-Heading"]}>Ball and Technique Training</h1>
                        <p className={TrainingCSS["Text-Paragraph"]}>Technical training in small groups is possible to create very useful competitions and games in the company of teammates or friends. The groups are formed according to age, and the structure of the trainings is based on different technical elements.</p>
                    </div>
                    <div className= {`${TrainingCSS.Image} ${TrainingCSS.One}`}>
                    </div>
                </div>
                <div className={TrainingCSS["Skills"]}>
                <div className={TrainingCSS["Text"]}>
                    <h1 className={TrainingCSS["Text-Heading"]}>Footwork Training</h1>
                    <p className={TrainingCSS["Text-Paragraph"]}>Goalkeeping in smaller groups. Development of technique, reflex, kick technique with the help of experienced professionals.</p>
                </div>
                <div className={`${TrainingCSS.Image} ${TrainingCSS.Two}`}>
                </div>
                </div>
                <div className={TrainingCSS["Skills"]}>
                <div className={TrainingCSS["Text"]}>
                    <h1 className={TrainingCSS["Text-Heading"]}>1 on 1 Training</h1>
                    <p className={TrainingCSS["Text-Paragraph"]}>An effective training method, with one coach max. It deals with individual players in post-specific exercises within the framework of the training.</p>
                </div>
                <div className={`${TrainingCSS.Image} ${TrainingCSS.Three}`}>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Training