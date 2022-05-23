import React from 'react';

const Tool = ({ tool }) => {

  const { name, picture, description, minimumOrderQuantity, availableQuantity, pricePerUnit } = tool;

  return (

    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <img src={picture} alt="screwdriver pic" />
        <h2 className='font-bold'>{name}</h2>
        <p>{description}</p>
        <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
        <p> Available Quantity: {availableQuantity}</p>
        <p>Price: {pricePerUnit}</p>
        <button className='btn btn-primary'>Purchase{name}</button>
      </div>
    </div>
  );
};

export default Tool;