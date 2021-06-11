import {useState,  useEffect} from "react";
import Inputbox from "./inputbox";
import Item from "./item"
import "./app.css"

import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function App(){
    const [toDoList, setToDoList] = useState([]);

    function addToDo(todo){
        setToDoList([
            ...toDoList,
            todo
        ]);
    }

    function deleteToDo(id){
        setToDoList(
            toDoList.filter((value, index) => index !== id)
        );
    }

    // this executes get request only once
    useEffect(() => {
        async function fetchData(){
            const response = await axios
            .get("http://localhost:8000/todoapi/list")
            setToDoList(response.data);
        }

        fetchData();
    }, [])

    return(
        <div id="appDiv">
            <h1>To Do List</h1>
            <Inputbox addToDo={addToDo}/>
            <ul>
                {toDoList.map((todo, index) => 
                (<Item key={index} id={index} todo={todo} 
                deleteToDo={deleteToDo}/>))}
            </ul>
        </div>
    )
}

export default App;
