@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.Main{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.Join{
    width: 90vw;
    height: 60vh;
    background-color: hsla(0, 0%, 7%, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    position: relative; 
    margin-top: 10%;
    
}

.Text{
    color: white;
}

.Heading{
    font-size: 45px;
    position: absolute;
    top: 10%;
}

.Paragraph{
    color: white;
    font-size: 20px;
    text-align: center;
}

a{
    width: 90vw;
    display: flex;
    justify-content: center;
}

.Button{
    position: absolute;
    bottom: 20%;
    width: auto;
    padding-left: 2%;
    padding-right: 2%;
    height: 10%;
    font-size: 24px;
    background-color:orange;
    color: black;
    border-radius: 7px;
    border: 1px solid black;
}

.Button:hover{
    cursor: pointer;
    background-color: white;
    color: orange;
    border: 1.3px solid orange;
}