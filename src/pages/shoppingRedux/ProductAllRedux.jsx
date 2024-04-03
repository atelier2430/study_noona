import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/reducer/productSlice';
import ProductItemRedux from '../../component/shoppingRedux/ProductItem';
import LoadingComp from '../../component/common/Loading';

function ProductAllRedux() {
  const productList = useSelector(state=>state.product.productList)
  const isLoading = useSelector(state=>state.product.isLoading)
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch()
  const [viewColumn, setViewColumn] = useState(4);

  const getProducts = () => {
    const searchQuery = query.get('q');
    dispatch(fetchProducts(searchQuery))
  };

  useEffect(() => {
    setQuery()
  }, [query, viewColumn]);

  useEffect(() => {
    getProducts();
  },[])

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
        {isLoading ? (
          <LoadingComp loading={isLoading}/>
        ):(
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
            {productList && productList.length > 0 ? (
              productList.map((product) => (
              <Col lg={viewColumn} key={product.id}>
                <ProductItemRedux product={product} />
              </Col>
              ))
            ) : <p>상품이 없습니다.</p>}
          </Row>
          </>
        )}
      </Container>
    </div>
  );
}

export default ProductAllRedux;
