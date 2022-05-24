import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  const { toolId } = useParams();
  const [purchaseProduct, setPurchaseProduct] = useState({});


  useEffect(() => {
    const url = `http://localhost:5000/tool/${toolId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setPurchaseProduct(data))
  }, [])

  return (
    <div>
      <div class="card flex justify-center items-center w-96 mx-auto">
        <div class="card-body">
          <img src={purchaseProduct.picture} alt="screwdriver pic" />
          <h2 className='font-bold'>{purchaseProduct.name}</h2>
          <p>{purchaseProduct.description}</p>
          <p>Minimum Order Quantity: {purchaseProduct.minimumOrderQuantity}</p>
          <p>Available Quantity: {purchaseProduct.availableQuantity}</p>
          <p className='mb-5'>Price Per Unit: ${purchaseProduct.pricePerUnit}</p>

          <form className='grid grid-cols-1 gap-3 justify-items-center'>
            <input type="text" name="name" placeholder="User Name" class="input input-bordered w-full max-w-xs" />
            <input type="email" name="email" placeholder="User Email" class="input input-bordered w-full max-w-xs" />
            <input type="text" name="address" placeholder="Address" class="input input-bordered w-full max-w-xs" />
            <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
            <input type="text" name="quantity" placeholder="Product Quantity" class="input input-bordered w-full max-w-xs" />
            <input type="submit" value="submit" className='btn btn-primary' class="btn btn-primary w-full max-w-xs" />
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Purchase;