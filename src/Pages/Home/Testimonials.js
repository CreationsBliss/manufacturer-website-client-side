import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [])

  return (
    <div className='bg-neutral'>
      <h1 className='text-6xl font-bold text-center mb-16'>Testimonials</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {
          reviews.map(review => <Testimonial key={review._id} review={review} ></Testimonial>)
        }
      </div>
    </div>
  );
};

export default Testimonials;