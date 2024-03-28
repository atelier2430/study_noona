import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import LoadingComp from '../../component/common/Loading';
import ProductItem from '../../component/shopping/ProductItem'

function ProductAll({query}) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
  },[])

  const API_JSON_SERVER = process.env.REACT_APP_API_JSON_SERVER
  const [productList, setProductList] = useState([])
  const getProducts = async () => {
    const url = `${API_JSON_SERVER}/products?${query}`;
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
      <Container className="product-list">
      {loading?
        <LoadingComp loading={loading}/>
        :(
          <>
          {/* <div className="order-area">
            <label htmlFor="orderDesc" className="radio-area">
              <input type="radio" name="productOrder" id="orderDesc" />
              <span>최신순</span>
              ?_sort=createdDate&_order=desc
            </label>
            <label htmlFor="orderAsc" className="radio-area">
              <input type="radio" name="productOrder" id="orderAsc" />
              <span>오래된순</span>
              ?_sort=createdDate&_order=asc
            </label>
          </div> */}
            <Row>
            {productList.length && productList.map((product) => (
              <Col lg={3} key={product.id}>
                <ProductItem product={product}/>
              </Col>
            ))}
            </Row>
          </>
        )}
        </Container>
    </div>
  )
}

export default ProductAll