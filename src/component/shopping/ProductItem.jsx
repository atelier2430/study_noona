import React, { useState, useEffect } from 'react'

function ProductItem({product}) {
  const [price, setPrice] = useState('')

  const formatNumberComma = (num) => {
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    setPrice(num.toString().replace(regexp, ','))
  }

  useEffect(()=>{
    formatNumberComma(product.price)
  },[])

  return (
    <li className="product-item">
      <div className="img">
        <img src={product.img} alt={`product${product.id}`} />
        <div className="size">
          {product.size.map((size)=>(
            <span key={size}>{size}</span>
            ))}
        </div>
      </div>
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