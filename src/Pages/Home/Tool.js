import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {

  const { _id, name, picture, description, minimumOrderQuantity, availableQuantity, pricePerUnit } = tool;
  const navigate = useNavigate();

  const navigateToPurchasePage = (id) => {
    navigate(`/tool/${id}`);
  }

  return (
    <div class="card grid-cols-1 lg:grid-cols-3 lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <img src={picture} alt="screwdriver pic" />
        <h2 className='font-bold'>{name}</h2>
        <p>{description}</p>
        <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
        <p> Available Quantity: {availableQuantity}</p>
        <p>Price: ${pricePerUnit}</p>
        <button onClick={() => navigateToPurchasePage(_id)} className='btn btn-primary'>Purchase</button>
      </div>
    </div>
  );
};

export default Tool;