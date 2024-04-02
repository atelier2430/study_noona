const initialState={
  productList: [],
  productDetail: null
}

function productReducer(state=initialState, action){
  const { type, payload } = action
  switch(type) {
    case 'GET_PRODUCT_SUCCESS':
      return {...state, productList: payload.productList};
    case 'GET_PRODUCT_DETAIL_SUCCESS':
      return {...state, productDetail: payload.productDetail};
    default:
      return {...state};
  }
}

export default productReducer