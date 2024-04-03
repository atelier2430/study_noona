import { productActions } from "../reducer/productReducer";

function getProducts(searchQuery){
  const API_JSON_SERVER = process.env.REACT_APP_API_JSON_SERVER;
  return async (dispatch) => {
    const url = `${API_JSON_SERVER}/products?q=${searchQuery || ''}`;
    const res = await fetch(url);
    const data = await res.json();
    dispatch(productActions.getAllProducts({productList: data}))
  }
}

function getProductDetail(id){
  const API_JSON_SERVER = process.env.REACT_APP_API_JSON_SERVER;
  return async (dispatch) => {
    const url = `${API_JSON_SERVER}/products/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    dispatch(productActions.getSingleProduct({productDetail: data}))
  }
}

const productAction = { getProducts, getProductDetail };

export default productAction;