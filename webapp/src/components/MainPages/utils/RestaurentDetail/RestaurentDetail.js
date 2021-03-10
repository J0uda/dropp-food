import React, { useState, useContext } from 'react'

import { Link, withRouter } from "react-router-dom"
import "./RestaurentDetail.css"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { GlobalState } from "../../../../GlobalState"

function RestaurentDetail(props) {
    const state = useContext(GlobalState);
    const [products] = state.ProductAPI.products
    const [isAdmin] = state.UserAPI.isAdmin
    const addCart= state.UserAPI.addCart
    
    const [searchItem, setSearchItem] = useState("")
    
    let filtredProducts = [] 
        products.forEach((val) => {
        if (searchItem == "") {
            filtredProducts.push(...val.menu)
        } else if (val.title.toLowerCase().includes(searchItem.toLowerCase())) {
            filtredProducts.push(...val.menu)
        }
    })
    console.log("filtred", filtredProducts)

    let filterparId = products.map(item => {

        if (item.product_id == props.match.params.id) {
            return (
                <div className="details" key={item.id}>
                    <div className="big-img">
                        <img className="imgs" src={item.images} alt="" />
                    </div>
                    <div className="box">
                        <div className="row">
                            <h2>{item.title}</h2>
                            <span>{item.location}</span>
                        </div>

                        <p>{item.operating_hours}</p>
                        <p>{item.description}</p>

                    </div>
                </div>
            )
        }
        else return ""

        
    })
    return (
        <div>
            <div className="appsses">
                {filterparId}
            </div>
            <div className="asssssd">
                <div>
                </div>
                <div>
                    <input type="text" placeholder="Search ..." onChange={event => { setSearchItem(event.target.value) }} />
                </div>
            </div>
            <div className="azed">
                {
                    filtredProducts.map((val, key) => {
                        return (
                            <div className="main card-grid">
                                <div className="card">
                                    <div className="card-img">
                                        
                                        <img src={val.images || '' } className="imageRestaurent"></img>
                                    </div>
                                    <div className="card-name">
                                        <p>{val.nom}</p>
                                    </div>
                                    <div className="card-description">
                                        <div>
                                            {/* <span className="card-preci card-nows">{val.location}</span> */}
                                            {/* <span className="card-preci card-before">{val.operating_hours}</span> */}
                                        </div>
                                        { isAdmin ? 
                                            <>
                                                <Link id="btn_by" to="#!">Delete</Link>
                                                <Link id="btn_view" to={`/edit/product${val._id}`}>Edit</Link>
                                            </> : <>
                                                <Link to="/cart" className="card-icon" onClick={ () => addCart(products)}>
                                                    <AiOutlineShoppingCart />
                                                </Link>
                                               </> 
                                        }
                                        <a href="" className="card-icon"></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default withRouter(RestaurentDetail);
