import React, { useState } from "react"

import LogoDropFood from "../../assest/backgroundSignup.png"
import "./RegisterSideBar.css"
import { Link } from 'react-router-dom'
import axios from "axios"

const RegisterSideBar = (props) => {
    const [user, setUser] = useState({
        email: '',password: '' 
    })

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({...user, [name]:value})
    }

    const RegisterSubmit = async e => {
        e.preventDefault()
        try {
            const x = await axios.post('http://localhost:5000/user/register', { ...user })
            localStorage.setItem('accesstoken', x.data.accesstoken)
            window.location.href = '/'
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    return (
        <div className="container-sideBar">
            <div>
                <img src={LogoDropFood} alt='Logo of Food Drop'  className='logoImage'/>
                <h3>Drop <span>Food</span></h3>
            </div>
            <form onSubmit={RegisterSubmit}>
                <h3 className="title-Sidebar">Register</h3>
                    <input type="text" placeholder='Full Name' required name="name"className="inputStyle" onChange={onChangeInput}/>
                    <input type="email" placeholder='Email' required className="inputStyle" name="email" onChange={onChangeInput}/>
                    <input type="password" placeholder='Password' required className="inputStyle" name="password" onChange={onChangeInput}/>          
                    <button className="Sign">Sign Up</button>
            <div>
                <p className="terms">
                By signing up, I agree to the Privacy Policy and Terms of Service
                <h4>Already have an account ?<span className="spanLogin"><Link to="/login">Login</Link></span></h4>
                </p>
            </div>
            </form>
        </div>
    )
}

export default RegisterSideBar; 