import React, { useContext } from 'react'

import './Sidebar.css'
import { Link } from 'react-router-dom'
import { FaTimes } from "react-icons/fa"
import { GlobalState } from '../../GlobalState'
import axios from 'axios'


const SideBarMenu = ({ isopen, toggle }) => {
    const state = useContext(GlobalState)
    const [isLogged, setIsLogged] = state.UserAPI.isLogged;
    const [isAdmin, setIsAdmin] = state.UserAPI.isAdmin;
    console.log("this is a state = ",state)
    const angleRight = isopen ? '0': '-1000px'

    const logoutUser = async () => {
        await axios.get('/user/logout')
        localStorage.clear()
        setIsAdmin(false)
        setIsLogged(false)
        window.location.href = '/'
    }


    const adminRouter = () => {
        return (
            <>
                <Link to="/create_restaurent" className="SideBarLink">Create Restaurent</Link>
                <Link to="/category" className="SideBarLink">Categiries</Link>
            </>
        )
    }

    const loggedRouter = () => {
        return (
            <>
                <Link to="/history" className="SideBarLink">history</Link>
                <Link to="/" onClick={logoutUser} className="SideBarLink">logout</Link>
            </>
        )
    }
    
    return(
        <div className="SideBarContainer" style={{right: `${angleRight}`}}>
            <div className="Icon">
                <FaTimes isopen={isopen} onClick={toggle} className="FaTimes"/>
            </div>
            <div className="SideBarMenu">
                {isAdmin && adminRouter()}
                {
                    
                    isLogged ? loggedRouter() : <><Link to="/login" className="SideBarLink">Login</Link>  <Link to="/register" className="SideBarLink">Signup</Link></>
                }
                
                
                
                {
                    isAdmin ? "" : <Link to="/cart" className="SideBarLink">{isAdmin? 'Admin' :  'Cart'}</Link> 
                }
            </div>
            <div className="SideBtnWrap">
                <button className="buttonSearch"><Link to="/" style={{textDecoration: 'none', color: '#FFF'}}>Devenir un hote</Link></button> 
            </div>
        </div>
    )
}

export default SideBarMenu