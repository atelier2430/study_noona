import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../redux/reducer/productSlice';
import LoadingComp from '../../component/common/Loading';

function ProductDetailRedux() {
  const isLoading = useSelector(state=>state.product.isLoading)
  const dispatch = useDispatch()
  const product = useSelector(state=>state.product.productDetail)
  
  const { id } = useParams()
  const getProductDetail = async () => {
    dispatch(fetchSingleProduct(id))
  }
  
  useEffect(()=>{
    getProductDetail()
  },[])

  return (
    <div className="product-detail-area">
      {isLoading ? (
        <LoadingComp loading={isLoading}/>
      ):(
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
          <div className="price">&#8361; {product && product.price}</div>
          <Form.Select aria-label="Default select example">
            <option>사이즈 선택</option>
            {product
            ? product.size.map((size, index) => (
              <option key={size} value={`${index}`}>{size}</option>
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

export default ProductDetailRedux