import {useState, useEffect} from 'react'
import axios from 'axios'

function CategoryAPI() {
    const [categories, setCategories] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getCategories = async () =>{
            const result = await axios.get('http://localhost:5000/api/category')
            console.log("aaa category", result)
            setCategories(result.data)
        }

        getCategories()
    },[callback])
    return {
        categories: [categories, setCategories],
        callback: [callback, setCallback]
    }
}

export default CategoryAPI