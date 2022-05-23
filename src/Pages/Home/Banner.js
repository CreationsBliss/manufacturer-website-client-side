import React from 'react';
import banner from '../../assets/banner/banner.jpg'

const Banner = () => {
  return (
    <div class="hero min-h-[70vh]" style={{
      background: `url(${banner})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-lg">
          <h1 class="mb-5 text-secondary text-5xl font-bold">Manufacturer Of Fabulous Screwdrivers</h1>
          <p class="mb-5">Screwdriver, tool, usually hand-operated, for turning screws with slotted heads. For screws with one straight diametral slot cut across the head, standard screwdrivers with flat blade tips and in a variety of sizes are used.</p>
          <button class="btn btn-primary">Explore Us</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;