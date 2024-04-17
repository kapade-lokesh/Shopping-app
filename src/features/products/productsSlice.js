import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {fetchProducts,fetchProductsByCategory} from './productsApi'

const initialState = {
    product : [],
    status : 'idle'
}

export const fetchAsyncProducts = createAsyncThunk(
     'product/fetchproduct', async()=>{
         const data =   await fetchProducts()
         return data;
     }
)


export const fetchAsyncProductsCategory = createAsyncThunk(
     'product/fetchAsyncProductsCategory' , async({filter,sort})=>{
           const data = await fetchProductsByCategory(filter,sort)
           return data;
     }
)


const productSlice = createSlice({
     name:'productSlice',
     initialState,
     reducers:{

     },

     extraReducers:(builder)=>{
         builder.addCase(fetchAsyncProducts.pending,(state)=>{
              state.status = 'loading';
         })
     .addCase(fetchAsyncProducts.fulfilled,(state,action)=>{
               
               state.status = 'idle'
               state.product = action.payload;
          })

        .addCase(fetchAsyncProductsCategory.pending,(state,action)=>{
             state.status = 'loading'
        })

        .addCase(fetchAsyncProductsCategory.fulfilled,(state,action)=>{
               state.status = 'ideal'
               state.product = action.payload;
        })
     }
})

export const selectProduct = (state) => state.product;

export default productSlice.reducer;