import { useState } from "react";

export default function Player({playerName,symbol,isActive}){
    const [name,setName] = useState(playerName);
    const [isEditing,setIsEditing] = useState(false);

    function editField(){
        setIsEditing((isEditing => !isEditing));
    }

    function handleChange(event){
        setName(event.target.value); 
    }

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {(isEditing === false) 
                ? <span className="player-name">{name}</span>
                : <input onChange={handleChange} type='text' value={name}></input>
                }              
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editField}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}