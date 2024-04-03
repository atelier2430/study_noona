import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
  productDetail: null,
  isLoading: false,
};
const API_JSON_SERVER = process.env.REACT_APP_API_JSON_SERVER;

export const fetchProducts = createAsyncThunk('product/fetchAll', async (searchQuery) => {
  try{
    const url = `${API_JSON_SERVER}/products?q=${searchQuery || ''}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }catch(error){
    throw new Error(error.message);
  }
});

export const fetchSingleProduct = createAsyncThunk('product/fetchSingle', async (id) => {
  try{
    const url = `${API_JSON_SERVER}/products/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }catch(error){
    throw new Error(error.message);
  }
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getSingleProduct(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.productDetail = action.payload.productDetail;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = false;
        // eslint-disable-next-line no-param-reassign
        state.productList = action.payload;
        // eslint-disable-next-line no-param-reassign
        state.productDetail = null;
      })
      .addCase(fetchProducts.rejected, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = false;
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = false;
        // eslint-disable-next-line no-param-reassign
        state.productDetail = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = false;
      });
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
