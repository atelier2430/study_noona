import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';

function ProductDetail() {
  const [price, setPrice] = useState(null)

  const formatNumberComma = (num) => {
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    setPrice(num.toString().replace(regexp, ','))
  }

  useEffect(()=>{
    formatNumberComma(99900)
  },[])
  return (
    <div className="product-detail-area">
      <div className="product-img-area">
        <img src="https://noona-hnm.netlify.app/pattern-jacket.jpeg" alt="" />
        <img src="https://noona-hnm.netlify.app/pattern-jacket.jpeg" alt="" />
      </div>
      <div className="product-info-area">
        <div className="title">
          <span>벨티드 트윌 코트</span>
          <span className="tag pick">PICK</span>
          <span className="tag new">NEW</span>
        </div>
        <div className="price">&#8361; {price}</div>
        <Form.Select aria-label="Default select example">
          <option>사이즈 선택</option>
          <option value="1">S</option>
          <option value="2">M</option>
          <option value="3">L</option>
        </Form.Select>
        <button type="button" className="btn-black">추가</button>
        <ul className="selected-product-list">
          <li>
            <span className="size">사이즈</span>
            <span className="count">수량</span>
            <span className="price">금액</span>
          </li>
          <li>
            <span className="size">S</span>
            <span className="count">1</span>
            <span className="price">&#8361; {price}</span>
          </li>
          <li>
            <span className="size">M</span>
            <span className="count">1</span>
            <span className="price">&#8361; {price}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProductDetail