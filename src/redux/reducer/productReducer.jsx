const initialState={
  productList: []
}

function productReducer(state=initialState, action){
  const { type, payload } = action
  switch(type) {
    case 'GET_PRODUCT_SUCCESS':
      return {...state, productList: payload.productList};
    default:
      return {...state};
  }
}

export default productReducer