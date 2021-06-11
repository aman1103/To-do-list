import "./item.css"
import axios from 'axios';

import {FaTrash} from "react-icons/fa"
import Todotext from "./todotext";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function Item(props){
    return(
        <li>
            <Todotext text={props.todo["task"]} id={props.todo["id"]}/>
            <span className="deleteBtn"
            onClick={() => {
                props.deleteToDo(props.id)
                
                const pk = props.todo["id"]
                axios.delete("http://localhost:8000/todoapi/delete/" + pk)
            }}><FaTrash /></span>
        </li>
    );
}

export default Item;
