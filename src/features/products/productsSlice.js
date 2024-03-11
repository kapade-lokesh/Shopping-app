import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import {fetchProducts} from './productsApi'

const initialState = {
    product : [],
    status : 'idle'
}

export const fetchAsyncProducts = createAsyncThunk(
     'product/fetchproduct', async()=>{
         const data =   await fetchProducts()
         console.log(data);
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
            console.log("in the pending state");
              state.status = 'loading';
         })
     .addCase(fetchAsyncProducts.fulfilled,(state,action)=>{
               console.log('in fullfill');
               state.status = 'idle'
               state.product = action.payload;
          })
     }
})

export const selectProduct = (state) => state.product;

export default productSlice.reducer;