import React, { useState } from "react"

import { Link } from 'react-router-dom'
import LogoDropFood from "../../assest/backgroundSignup.png"
import "./SideBarLogin.css"
import axios from "axios"

const SideBarLogin = (props) => {
    const [user, setUser] = useState({
        email: '',password: '' 
    })

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async Event => {
        Event.preventDefault();
        try {
            const x = await axios.post('http://localhost:5000/user/login', { ...user })
        
            localStorage.setItem('accesstoken', x.data.accesstoken)
            window.location.href = '/'

        } catch (err) {
        }
        console.log(user)
    }

    return (
        <div className="container-sideBarLogin">
            <div>
                <img src={LogoDropFood} alt='Logo of Food Drop'  className='logoImage'/>
                <h3>Drop <span>Food</span></h3>
            </div>
           
            <form onSubmit={loginSubmit}>
                <h3 className="title-Sidebar">Login</h3>
                    <input type="email" placeholder='Email' className="inputStyle" name="email" value={user.email} required onChange={onChangeInput}/>
                    <input type="password" placeholder='Password' className="inputStyle" value={user.password} name="password" required autoComplete="on"onChange={onChangeInput} />          
                    <button type="submit" className="button-login">Sign Up</button>
            </form>
            <div>
                <p className="terms">
                By signing up, I agree to the Privacy Policy and Terms of Service
                <h4>Already have an account ?<span className="spanLogin"><Link to="/register">Login</Link></span></h4>
                </p>
            </div>
        </div>
    )
}

export default SideBarLogin; 