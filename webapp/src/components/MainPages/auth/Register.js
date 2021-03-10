import React from 'react';

import "./Register.css"
import RegisterSideBar from "./RegisterSideBar";
import RegisterMain from "./RegisterMain"


function Register(props) {
    return (
        <div className="container">
            <div className="wrapper">
                <RegisterSideBar push={props.history.push}/>
                <RegisterMain />
            </div>
        </div>
    )
}

export default Register;
