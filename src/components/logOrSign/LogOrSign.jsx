import React from 'react';
import Login from "../login/Login";
import Signup from "../signup/Signup";
import "./LogOrSign.css";

const LogOrSign = ({ setUser }) => {
  return (
    <div className="logorsign-wrapper">
      <Login setUser={setUser}/>
      <Signup setUser={setUser}/>
    </div>
  )
}

export default LogOrSign
