import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductItem from '../../component/shopping/ProductItem'

function ProductAll() {
  const API_JSON_SERVER = process.env.REACT_APP_API_JSON_SERVER
  const [productList, setProductList] = useState([])
  const getProducts = async () => {
    const url = `${API_JSON_SERVER}/products`
    // eslint-disable-next-line no-useless-catch
    try {
      const res = await fetch(url)
      const data = await res.json()
      setProductList(data)
    } catch (error) {
      throw error
    }
  }

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <div>
      <Container className="product-list">
        <Row>
        {productList.length && productList.map((product) => (
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