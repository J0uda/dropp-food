import React, { useState, useContext } from 'react'

import './ProductItem.css'
import { IoFastFoodOutline } from "react-icons/io5"
import { FaPhoneAlt } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import {  Link, withRouter } from 'react-router-dom'
import { GlobalState } from "../../../../GlobalState"
import axios from "axios"

const RestaurentCard = ({product, deleteProduct, handleCheck}) => { 
    const state = useContext(GlobalState)
    const [products, setProducts] = state.ProductAPI.products
    const [isAdmin] = state.UserAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.ProductAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    return (
        <div className="main card-grids">
                {
                    isAdmin && <input type="checkbox" checked={product.checked} onChange={() => handleCheck(product._id)}/>
                }
                <div className="restaurent-card">
                    <div className="card-front">
                        <div className="left-card">
                            <img src={product.images.public_id == 'test/bapyxrghjyxrb31s6i2l' ? product.images.url  : product.images}></img>
                        </div>
                        <div className="right-card">
                            <div className="title-card right-contents">
                                <div className="IoFastFoodOutline">
                                <IoFastFoodOutline/>
                                </div>
                                <div>
                                    {product.title}
                                </div>
                            </div>
                            <div className="phone right-contents">
                                <div className="FaPhoneAlt">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h4>Phone Number</h4>
                                    <p> 216 58 618 709</p>
                                </div>
                            </div>
                            <div className="adresse right-contents">
                                <div className="GoLocation">
                                    <GoLocation />
                                </div>
                                <div>
                                    <h4>Adresse</h4>
                                    <p>{product.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-back">
                        <img src={product.images}/>
                        <div className="adresse right-contents">
                            {
                                isAdmin ? <> 
                                            <Link to="#!"  style={{textDecoration: "none", color: "red", margin: '2px'}} onClick={() =>deleteProduct(product._id, product.images.public_id)}>Delete</Link>
                                            <Link to={`/edit_product/${product._id}`} style={{textDecoration: "none", color: "#a3e4d7", margin: '2px'}}>Edit</Link>
                                           </>  
                            :    
                            <Link to={`/restaurentDetail/${product.product_id}`} style={{textDecoration: "none", color: "#a3e4d7"}}>View Detail</Link>
                        }
                            </div>
                    </div>
                </div>
            </div>
    )
}

export default withRouter(RestaurentCard)