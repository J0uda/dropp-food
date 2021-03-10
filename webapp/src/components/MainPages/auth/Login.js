import React from 'react';

import "./Login.css"
import SideBarLogin from "./SideBarLogin";
import MainLogin from "./MainLogin"

function Login(props) {
    return (
        <div className="container">
            <div className="wrapper">
                <SideBarLogin push={props.history.push}/>
                <MainLogin />
            </div>
        </div>
    )
}


export default Login;
