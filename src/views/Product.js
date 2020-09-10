import React from 'react';
import { useParams } from 'react-router-dom';

function Product(props) {
  const { id } = useParams();

  return <div>{props.productData}</div>;
}

export default Product;
