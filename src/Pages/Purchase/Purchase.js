import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  const { toolId } = useParams();
  const [purchaseProduct, setPurchaseProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:3000/tool/${toolId}`;
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => setPurchaseProduct(data))
  }, [])

  return (
    <div>
      <h3>Name: {purchaseProduct.pricePerUnit}  </h3>
    </div>
  );
};

export default Purchase;