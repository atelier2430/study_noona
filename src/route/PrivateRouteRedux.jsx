import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductDetailRedux from '../pages/shoppingRedux/ProductDetailRedux'

function PrivateRouteRedux() {
  const authenciate = useSelector(state=>state.auth.authenciate)
  return authenciate ? <ProductDetailRedux />:<Navigate to="/hnm-redux/login"/>
}

export default PrivateRouteRedux