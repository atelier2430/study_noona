import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import LoadingComp from '../../component/common/Loading';
import ProductItem from '../../component/shopping/ProductItem';

function ProductAll() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useSearchParams();
  const [viewColumn, setViewColumn] = useState(4);
  const API_JSON_SERVER = process.env.REACT_APP_API_JSON_SERVER;
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setLoading(true);
  }, []);

  const getProducts = async () => {
    const searchQuery = query.get('q');
    const url = `${API_JSON_SERVER}/products?q=${searchQuery || ''}`;
    try {
      setLoading(true);
      const res = await fetch(url, {
        headers: {
          Accept: 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await res.json();
      setLoading(false);
      setProductList(data);
    } catch (error) {
      setQuery('');
      throw new Error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query, viewColumn]);

  const sortList = [
    { id: 'orderReset', label: '추천순', defaultChecked: true, sort: '', order: '' },
    { id: 'orderDesc', label: '최신순', defaultChecked: false, sort: 'createdDate', order: 'desc' },
    { id: 'priceDesc', label: '낮은 가격순', defaultChecked: false, sort: 'price', order: 'desc' },
    { id: 'priceAsc', label: '높은 가격순', defaultChecked: false, sort: 'price', order: 'asc' },
  ];

  const clickViewColumn = (num) => {
    setViewColumn(num);
  };

  return (
    <div>
      <Container className="product-list">
        {loading ? (
          <LoadingComp loading={loading} />
        ) : (
          <>
            <div className="order-area">
              {sortList.map((sort) => (
                <label key={sort.id} htmlFor={sort.id} className="radio-area">
                  <input
                    type="radio"
                    name="productSort"
                    id={sort.id}
                    defaultChecked={sort.defaultChecked}
                  />
                  <span>{sort.label}</span>
                </label>
              ))}
              <button type="button" className="icon view-big" onClick={() => clickViewColumn(4)}>
                크게 보기
              </button>
              <button type="button" className="icon view-small" onClick={() => clickViewColumn(2)}>
                작게 보기
              </button>
            </div>
            <Row>
              {productList.length > 0 &&
                productList.map((product) => (
                  <Col lg={viewColumn} key={product.id}>
                    <ProductItem product={product} />
                  </Col>
                ))}
            </Row>
          </>
        )}
      </Container>
    </div>
  );
}

export default ProductAll;
