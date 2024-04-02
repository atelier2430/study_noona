function getProducts(searchQuery){
  const API_JSON_SERVER = process.env.REACT_APP_API_JSON_SERVER;
  return async (dispatch) => {
    const url = `${API_JSON_SERVER}/products?q=${searchQuery || ''}`;
    const res = await fetch(url);
    const data = await res.json();
    dispatch({type: "GET_PRODUCT_SUCCESS", payload: {productList: data}})
  }
}

function getProductDetail(id){
  const API_JSON_SERVER = process.env.REACT_APP_API_JSON_SERVER;
  return async (dispatch) => {
    const url = `${API_JSON_SERVER}/products/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    dispatch({type: "GET_PRODUCT_DETAIL_SUCCESS", payload: {productDetail: data}})
  }
}

const productAction = { getProducts, getProductDetail };

export default productAction;