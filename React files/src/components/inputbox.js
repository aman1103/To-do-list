import {useState} from "react";
import "./inputbox.css"
import {VscAdd} from "react-icons/vsc";

import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function Inputbox(props){

    const [text, setText] = useState("");

    function changeInInput(event){
        setText(event.target.value);
    }

    async function buttonClicked(event){
        event.preventDefault();

        const response = await axios
        .post("http://localhost:8000/todoapi/create", {task: text})
        props.addToDo(response.data)

        setText("");
    }

    return(
        <form>
            <input type="text" name="todoText" placeholder="Write to do..." 
            id="inputArea" onChange={changeInInput} value={text}/>
            <button onClick={buttonClicked}><VscAdd /></button>
        </form>
    );
}

export default Inputbox;
