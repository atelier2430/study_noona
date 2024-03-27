import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductItem from '../../component/shopping/ProductItem'

function ProductAll() {
  const [productList, setProductList] = useState([])
  const getProducts = async () => {
    const url = `http://localhost:8080/products`
    const res = await fetch(url)
    const data = await res.json()
    setProductList(data)
  }

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <div>
      <Container className="product-list">
        <Row>
        {productList.map((product) => (
          <Col lg={3}>
            <ProductItem product={product}/>
          </Col>
        ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll