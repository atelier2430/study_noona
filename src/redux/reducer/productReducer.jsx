import { createSlice } from '@reduxjs/toolkit'

const initialState={
  productList: [],
  productDetail: null
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.productList = action.payload.productList
    }, 
    getSingleProduct(state,action){
      // eslint-disable-next-line no-param-reassign
      state.productDetail = action.payload.productDetail
    }
  }
})

export const productActions = productSlice.actions
export default productSlice.reducer