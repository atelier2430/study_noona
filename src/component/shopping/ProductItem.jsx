import React from 'react'

function ProductItem({product}) {
  return (
    <li key={product.id}>
      <img src={product.img} alt={`product${product.id}`} />
      <div className="title">{product.title}</div>
      <div className="price">{product.price}</div>
      <div className="choice">{product.choice}</div>
      <div className="new">{product.new}</div>
      <div className="size">
        {product.size.map((size)=>(
          <span>{size}</span>
        ))}
      </div>
    </li>
  )
}

export default ProductItem