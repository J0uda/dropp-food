import React, { useContext, useState } from "react"
import { GlobalState } from "../../../GlobalState"
import ProductItem from '../utils/ProductItem/ProductItem'
import { withRouter } from "react-router-dom"
import RestaurentList from "./RestaurentList"
import Loading from '../utils/Loading/Loading'
import axios from "axios"
import Filters from './Filters'
import './Products.css'

function Products(props) {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.ProductAPI.products
    const [isAdmin] = state.UserAPI.isAdmin
    const [token] = state.token
    const locations = props.match.params.text
    const [callback, setCallback] = state.ProductAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    const handleCheck = (id) =>{
        products.forEach(product => {
            if(product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    const deleteProduct = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('http://localhost:5000/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`http://localhost:5000/api/products/${id}`, {
                headers: {Authorization: token}
            })

            await destroyImg
            await deleteProduct
            alert('The Products Has deleted')
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () =>{
        products.forEach(product => {
            product.checked = !isCheck
        })
        setProducts([...products])
        setIsCheck(!isCheck)
    }

    const deleteAll = () =>{
        products.forEach(product => {
            if(product.checked) deleteProduct(product._id, product.images.public_id)
        })
    }

    let filterRestaurent = products.filter((item) => {
          return item.location.toLowerCase().includes(locations)
    })
    console.log('this is state of product ', state)
    console.log("Products",products);
    return(
        <div>
             <Filters />
            {
            isAdmin && 
            <div className="delete-all">
                <span>Select all</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll} />
                <button onClick={deleteAll}>Delete ALL</button>
            </div>
        }
            <RestaurentList 
                key={products._id} 
                products={products} 
                filterRestaurent={filterRestaurent} 
                deleteProduct={deleteProduct} 
                handleCheck={handleCheck}
                isAdmin={isAdmin} />
            {products.length === 0 && <Loading />}
        </div>
    )
}

export default withRouter(Products)