import React from 'react';
import { useState } from "react";
import { signup } from "../../utils/fetch";

const Signup = ({ setUser }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeHandler = (e, setter, state) => {
        setter(e.target.value);
        console.log(state);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("hello from signup submit");
        const data = await signup(username, email, password);
        if(data.error != null){
            console.log("an error has occured: \""+data.message+"\"");
        }
        else{
            await setUser(data.user);
        }
    }

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="username" onChange={(e) => changeHandler(e, setUsername, username)}/>
                <input placeholder="email" onChange={(e) => changeHandler(e, setEmail, email)}/>
                <input placeholder="password" onChange={(e) => changeHandler(e, setPassword, password)}/>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup
