import React from 'react';
import screwdriver from '../../assets/images/screwdriver.png'

const Service = () => {
  return (
    <div>
      <div class="hero bg-neutral">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={screwdriver} alt="screwdriver" class="max-w-sm rounded-lg" />
          <div>
            <h1 class="text-5xl font-bold">Need High-Function Bar Wire Screwdriver?</h1>
            <p class="py-6">We can offer abundant tools to meet diversified and sophisticated needs in each field.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;