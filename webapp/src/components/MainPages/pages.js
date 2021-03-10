import React, { useContext, useState } from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./Home/Home"
import Login from "../MainPages/auth/Login"
import Register from "../MainPages/auth/Register"
import Cart from "./cart/Cart"
import Products from "./products/Products"
import CreateProduct from './createProduct/CreateProduct'
import RestaurentDetail from "./utils/RestaurentDetail/RestaurentDetail"
import NotFound from './utils/not_found/NotFound'
import OrderHistory from "../MainPages/history/OrderHistory"
import OrderDetails from '../MainPages/history/OrderDetails'
import Categories from "../MainPages/category/Categories"

import { GlobalState } from "../../GlobalState"

function MainPages(props) { 
    const state = useContext(GlobalState)
    const [isAdmin] = state.UserAPI.isAdmin
    const  [isLogged] = state.UserAPI.isLogged
    return(
        <Switch>
            <Route path="/" exact render={(props) => <Home />} /> 
            <Route path="/login" exact component={isLogged ? NotFound : Login} / >
            <Route path="/register" exact component={isLogged ? NotFound : Register} />
            <Route path="/cart" exact component={Cart} />
            <Route exact path="/restaurent/:text"  render={ (props) => <Products />} />
            <Route exact path="/restaurentDetail/:id" render={(props) => <RestaurentDetail />} />
            <Route path="/create_restaurent" exact component={CreateProduct} />
            <Route path="/history" exact component={OrderHistory} />
            <Route path="/history/:id" exact component={OrderDetails} />
            <Route path="/category" exact component={Categories} />
            <Route path="/edit_product/:id" exact component={CreateProduct} />
        </Switch>
    )
}

export default MainPages