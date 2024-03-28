import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../pages/shopping/ProductDetail'

function PrivateRoute({isLogin}) {
  return isLogin ? <ProductDetail />:<Navigate to="/hnm/login"/>
}

export default PrivateRoute