import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/notfound.png'

const NotFound = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={notFound} class="max-w-sm rounded-lg" alt='not found pic' />
        <div>
          <h1 class="text-9xl font-bold text-error">404</h1>
          <p class="py-6">The page you are trying to access does not exist or has been moved. <br /> Try going back to our homepage.</p>
          <Link to='/' class="btn btn-primary">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;