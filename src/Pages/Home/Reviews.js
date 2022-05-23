import React from 'react';
import pic1 from '../../assets/customer/pic-1.png';
import pic2 from '../../assets/customer/pic-2.png';
import pic3 from '../../assets/customer/pic-3.png';
import Review from './Review';

const Reviews = () => {

  const reviews = [
    {
      _id: 1,
      name: "Larry Loe",
      feedback: 'I want to make sure I’m doing a top-notch job for you. Would you consider leaving some feedback here?',
      location: 'New York City',
      img: pic1
    },
    {
      _id: 2,
      name: "Muhu Joyi",
      feedback: 'I want to make sure I’m doing a top-notch job for you. Would you consider leaving some feedback here?',
      location: 'Loss Angeles',
      img: pic2
    },
    {
      _id: 3,
      name: "Maleka Milu",
      feedback: 'I want to make sure I’m doing a top-notch job for you. Would you consider leaving some feedback here?',
      location: 'California',
      img: pic3
    },
  ];

  return (
    <div className='bg-neutral'>
      <h1 className='text-6xl font-bold text-center mb-16'>What Our Clients Say</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {
          reviews.map(review => <Review key={review._id} review={review}></Review> )
        }
      </div>
    </div>
  );
};

export default Reviews;