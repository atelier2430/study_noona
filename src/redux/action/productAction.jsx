function getProducts(searchQuery){
  const API_JSON_SERVER = process.env.REACT_APP_API_JSON_SERVER;
  return async (dispatch, getState) => {
    const url = `${API_JSON_SERVER}/products?q=${searchQuery || ''}`;
    const res = await fetch(url);
    const data = await res.json();
    dispatch({type: "GET_PRODUCT_SUCCESS", payload: {productList: data}})
    console.log(getState)
  }
}

const productAction = { getProducts };

export default productAction;