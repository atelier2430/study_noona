import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import LoadingComp from '../../component/common/Loading';
import ProductItem from '../../component/shopping/ProductItem'

function ProductAll() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
  },[])

  const API_JSON_SERVER = process.env.REACT_APP_API_JSON_SERVER
  const [productList, setProductList] = useState([])
  const getProducts = async () => {
    const url = `${API_JSON_SERVER}/products`;
    try {
      setLoading(true)
      const res = await fetch(url, {
        headers: {
          Accept: "application/json",
        },
      });
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await res.json();
      setLoading(false)
      setProductList(data)
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <div>
      {loading?
        <LoadingComp loading={loading}/>
        :(<Container className="product-list">
          <Row>
          {productList.length && productList.map((product) => (
            <Col lg={3} key={product.id}>
              <ProductItem product={product}/>
            </Col>
          ))}
          </Row>
        </Container>)}
    </div>
  )
}

export default ProductAll