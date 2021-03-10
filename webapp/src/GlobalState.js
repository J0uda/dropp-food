import React, { useState, useEffect, createContext,} from 'react'
import axios from 'axios'
import UserAPI from './api/UserAPI'
import ProductAPI from "./api/ProductAPI"
import CategoryAPI from './api/CategoryAPI'

export const GlobalState = createContext()

export const DataProvider = ({ children }) =>{
    const [token, setToken] = useState(false)
    useEffect(() => {
        setToken(localStorage.getItem('accesstoken'))
        console.log("token = ",token)
    })

    
    const state = {
        token: [token, setToken],
        UserAPI: UserAPI(token),
        ProductAPI: ProductAPI(),
        CategoryAPI: CategoryAPI()
    }

    return (
        <GlobalState.Provider value={state}>
            {children} 
        </GlobalState.Provider>
    )
}