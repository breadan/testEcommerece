import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from './AllProducts/AllProductsSlice'



 export const store = configureStore({
  reducer: {
    productRed: productReducer,
  },
})
