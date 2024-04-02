import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetailRedux from '../pages/shoppingRedux/ProductDetail'

function PrivateRouteRedux({isLoginRedux}) {
  return isLoginRedux ? <ProductDetailRedux />:<Navigate to="/hnm-redux/login"/>
}

export default PrivateRouteRedux