import React, { useState, useContext } from 'react'

import ProductItem from "../utils/ProductItem/ProductItem"
import "./RestaurentList.css"
import {GlobalState } from "../../../GlobalState"

function RestaurentList({restaurent, filterRestaurent, isAdmin, deleteProduct, handleCheck}) {
    const state = useContext(GlobalState);
    const [products] = state.ProductAPI.products

    let restaurentList = filterRestaurent.map((restaurent, i) => {
        return <ProductItem  
        isAdmin={isAdmin}
        key={i} product={restaurent} deleteProduct={deleteProduct} 
        handleCheck={handleCheck} filterRestaurent={filterRestaurent}
                /> 
    })
    return(
        <div className="containerRestaurentList">
            {restaurentList}
        </div>
    )
}

export default RestaurentList