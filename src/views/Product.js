import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Product(props) {
  const { id } = useParams();

  return <div>{props.jobData}</div>;
}

export default Product;
