import axios from 'axios'
import React, { createContext } from 'react'

const ProductsContext = ({ children }) => {

    axios.defaults.baseURL = 'http://127.0.0.1:8000'

    const [loading, setLoading] = React.useState(true)
    const [products, setProducts] = React.useState([])

    const fetchProducts = async () => {
        try {
            setLoading(true)
            const res = await axios.get('/products/')
            setProducts(res.data)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }


    const [product, setProduct] = React.useState({})

    const fetchProduct = async (id) => {
        try {
            setLoading(true)
            const res = await axios.get(`/products/${id}/`)
            setProduct(res.data)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <ProductsContextProvider.Provider value={{
            loading, setLoading,
            products, setProducts,
            fetchProducts,
            product, setProduct,
            fetchProduct
        }}>
            {children}
        </ProductsContextProvider.Provider>
    )
}


export default ProductsContext
export const ProductsContextProvider = createContext()

