import React from 'react';

const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className='bg-info py-5 text-center text-base-100'>
      <p> <span className='text-primary'>screwD.</span> &copy; {year}. All rights reserved.</p>
    </div>
  );
};

export default Footer;