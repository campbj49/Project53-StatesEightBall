import { useState } from "react";

const EightBall = (props) =>{
    const [color, setColor] = useState("black");
    const [text, setText] = useState("Click to shake...");
    function shakeBall(){
        let answerKeys = Object.keys(props.answers);
        let answer = props.answers[answerKeys[Math.floor(Math.random()*answerKeys.length)]];
        let ball = arguments[0].target;
        setColor(answer.color);
        setText(answer.msg);
    }


    return (
        <div className="EightBall" onClick={shakeBall} style={{backgroundColor:color}}>
            <p>{text}</p>
        </div>
    )
}

EightBall.defaultProps={
    answers:[
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]
}
export default EightBall;