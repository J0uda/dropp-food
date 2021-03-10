import React, { useContext, useEffect, useState } from "react"

import { GlobalState } from '../../../GlobalState'
import './cart.css'
import axios from "axios"
import PaypalButton from "./PaypalButton"

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.UserAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)
    const [searchItem, setSearchItem] = useState("")

    console.log("cart = ",cart)
    console.log("azea",cart)
    
    useEffect(() => {
        const getTotal = () => {
            let total = 0
            cart.forEach((item) => {
                for (const key in item) {
                    if (Object.hasOwnProperty.call(item, key)) {
                      const element = item[key];
                      if (element.price && item.quantity) {
                        total += element.price * item.quantity
                      }
                    }
                  }
            })
            setTotal(total)
        }
        getTotal()
    }, [cart])

    const addCart = async () => {
        await axios.patch('http://localhost:5000/user/addcart', { cart }, {
            headers: { Authorization: token }
        })
    }

    
    const incriment = (id) => {
        cart.forEach(item => {
            if(item._id === id) {
                item.quantity +=1
            }
        });
        setCart([...cart])
        addCart()
    }

    const decriment = (id) => {
        cart.forEach(item => {
            if(item._id === id) {
                item.quantity -=1
            }
        });
        setCart([...cart])
        addCart()
    }

    const removeProduct = id => {
        if(window.confirm('Do you want to delete this restaurent')) {
            cart.forEach((item, index) => {
                if(item.id === id) {
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
            addCart()
        }
    }

    const tranSuccess = async(payment) => {
        const {paymentID, address} = payment;

        await axios.post('/api/payment', {cart, paymentID, address}, {
            headers: { Authorization: token }
        })

        setCart([])
        addCart([])
        alert("You have successfully placed an order.")
    }

    if(cart.length === 0) 
    return <h2 style={{ textAlign: "center", fontSize: '5rem'}}>Cart Empty</h2>
    return(
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '5rem'}}>
            {
            cart.map((val, key) => {
                console.log("val ===",val[1].menu[0])
                return (
                    <div className="main card-grid" key={val._id}>
                        <div className="card">
                            <div className="card-img">
                                <img src={val[1].menu[0].images} className="imageRestaurent"></img>
                            </div>
                            <div className="card-name">
                                <p>{val[1].title}</p>
                            </div>
                            <div className="card-description">
                                <div>
                                    {/* <span className="card-preci card-nows">{val.location}</span> */}
                                    {/* <span className="card-preci card-before">{val.operating_hours}</span> */}
                                </div>
                                <div className="amount">
                                    <input type="button" onClick={() => decriment(val._id)} style={{width: '30px'}} value="-"></input>
                                    <span>{val.quantity}</span>
                                    <input type="button" onClick={ () => incriment(val._id)} style={{width: '30px'}} value="+"></input>
                                </div>
                                <div className="delete" onClick={ () => removeProduct(val._id)}>X</div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
            <div className="total" style={{display: 'flex', justifyContent: 'flex-end',marginRight: "1rem"}}>
                <h3 style={{marginRight: '0.5rem'}}>Total: $ {total}</h3>
                <PaypalButton total={total} tranSuccess={tranSuccess} />
            </div>
        </div>
    )
}

export default Cart