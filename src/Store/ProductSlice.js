import {createSlice} from '@reduxjs/toolkit' ;
import axios from 'axios' ;


export const STATUSES = {
    SUCCESS: "success",
    LOADING: "Loading" , 
    ERROR: "error"
}

const ProductSlice = createSlice ({
    name: "products" ,
    initialState: {
        data: [] ,
        Status : STATUSES.SUCCESS ,
    } ,
    reducers : {
        setProducts(state , action) {
            state.data = action.payload;
        },
        setStatus(state , action) {
            state.status = action.payload
        }
    }
}) ;

export const {setProducts , setStatus} = ProductSlice.actions ;
export default ProductSlice.reducer ;


export  function fetchProducts(){
    return async function fetchProductThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING)) ;
        try {
            const result = await axios.get("https://fakestoreapi.com/products") ;
            dispatch(setProducts(result?.data)) ;
            dispatch(setStatus(STATUSES.SUCCESS)) ;
        }
        catch(err){
            dispatch(setStatus(STATUSES.ERROR)) ;
        }
    }
}