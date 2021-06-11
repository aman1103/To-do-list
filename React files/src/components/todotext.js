import {useState, useEffect} from "react";
import "./todotext.css";

import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function Todotext(props){
    const [text, setText] = useState("");

    // this will update state text on change in props
    useEffect(() => {
        setText(props.text)
    }, [props])

    function textChanged(event){
        setText(event.target.value);
    }

    async function enterPressed(){
        const pk = props.id;
        const response  = await axios
        .put("http://localhost:8000/todoapi/update/" + pk, {task: text})
    }

    return(
        <input type="text" value={text} className="textInput"
        onChange={textChanged} onKeyUp={(event) => {
            if(event.key === "Enter"){
                enterPressed();
            }
        }}/>
    )
}

export default Todotext;
