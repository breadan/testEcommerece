import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

///api/v1/products
let initialState = {products:[], TopRated:[], isLoading:false}
export const getAllProducts = createAsyncThunk(
  'allProducts/getAllProducts',
  async () => {
    // console.log("jj");
    let {data} = await axios.get(`https://route-ecommerce-app.vercel.app/api/v1/products`)
    console.log(data);
    return data
  }
)

let allProductsSlice = createSlice({
    name: 'allProducts',
    initialState,
    reducers: {
      // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload.data;
        state.isLoading=false
        
        // // console.log(state.products);
        // state.TopRated= state.products.filter((top)=>{
        //   return top.ratingsAverage > 4
        // }) 
        // console.log(state.TopRated);
        // Add user to the state array
       
        
      });
      builder.addCase(getAllProducts.pending, (state, action) => {
        // Add user to the state array
        state.isLoading=true;
       
      });
    
    },
  })

  export let productReducer = allProductsSlice.reducer;
  export let {products} = allProductsSlice.actions;