import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ProductItem({product}) {
  const [price, setPrice] = useState('')

  const formatNumberComma = (num) => {
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    setPrice(num.toString().replace(regexp, ','))
  }

  useEffect(()=>{
    formatNumberComma(product.price)
  },[])

  const navigate = useNavigate()

  const showDetail = (id) => {
    navigate(`/hnm/product/${id}`)
  }

  return (
    <li className="product-item">
      <button type="button" className="img" onClick={()=>showDetail(product.id)}>
        <img src={product.img} alt={`product${product.id}`} />
        <div className="size">
          {product.size.map((size)=>(
            <span key={size}>{size}</span>
            ))}
        </div>
      </button>
      <div className="product-info">
        <div className="title">
          {product.title}
          {product.choice?(<span className="tag pick">PICK</span>):null}
          {product.new?(<span className="tag new">NEW</span>):null}
        </div>
        <div className="price">&#8361; {price}</div>
      </div>
    </li>
  )
}

export default ProductItem