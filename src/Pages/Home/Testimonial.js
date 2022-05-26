import React from 'react';

const Testimonial = ({ review }) => {
  const { name, image, description, location, rating } = review;

  return (

<div class="card text-center lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{description}</p>
        <p className='font-bold text-primary'>{rating}</p>
        <div class="flex justify-center">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={image} alt="customer pic" />
            </div>
          </div>
          <div>
            <h4 className='text-xl'> {name} </h4>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;