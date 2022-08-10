import React, {useEffect, useState} from 'react';

import './App.css';
import {Button} from "./components/Button";

type GetPropsType = {
    "userId": number
    "id": number
    "title": string
    "body": string
}

function App() {

    let [get, setGet] = useState<Array<GetPropsType>>([])
    console.log(get)
    const getRequestHandler = () => {
        setGet([])
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setGet(json))
    }, [])

    return (
        <div className="App">
            <Button name={"CleanPage"} callBack={getRequestHandler}/>
            <p></p>
            <ul>
                {get.map((el)=> {
                    return(
                    <li>
                        <span>{el.id} - </span>
                        <span>{el.userId} - </span>
                        <span>{el.title} - </span>
                    </li>
                    )
                })}
            </ul>

        </div>
    );
}

export default App;
