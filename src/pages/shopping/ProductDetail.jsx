import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import LoadingComp from '../../component/common/Loading';

function ProductDetail() {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState(null)
  const [price, setPrice] = useState(null)

  const formatNumberComma = (num) => {
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    setPrice(num.toString().replace(regexp, ','))
  }

  const API_JSON_SERVER = process.env.REACT_APP_API_JSON_SERVER
  const { id } = useParams()
  const getProductDetail = async () => {
    const url = `${API_JSON_SERVER}/products/${id}`;
    try {
      setLoading(true)
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false)
      setProduct(data)
      formatNumberComma(data.price)
    } catch (error) {
      throw new Error(error)
    }
  }
  
  useEffect(()=>{
    setLoading(true)
    getProductDetail()
  },[])

  return (
    <div className="product-detail-area">
      {loading?
        <LoadingComp loading={loading}/>
      :(
        <>
        <div className="product-img-area">
          <img src={product?product.img:""} alt="" />
          <div className="tag-area">
            {product && product.choice && <span className="tag pick">PICK</span>}
            {product && product.new && <span className="tag new">NEW</span>}
          </div>
        </div>
        <div className="product-info-area">
          <div className="title">
            <span>{product?product.title:""}</span>
          </div>
          <div className="price">&#8361; {price}</div>
          <Form.Select aria-label="Default select example">
            <option>사이즈 선택</option>
            {product
            ? product.size.map((size, index) => (
              <option value={`${index}`}>{size}</option>
            ))
            : null}
          </Form.Select>
          <button type="button" className="btn-black">추가</button>
        </div>
        </>
      )}
    </div>
  )
}

export default ProductDetail