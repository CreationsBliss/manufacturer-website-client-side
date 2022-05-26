import React from 'react';
import { AiOutlineFlag } from 'react-icons/ai';
import { GiProfit } from 'react-icons/gi';
import { BsTools } from 'react-icons/bs';
import { BiHappyAlt } from 'react-icons/bi';

const BusinessSummary = () => {
  return (
    <div className='px-28 py-16'>
      <h1 className='text-4xl font-bold text-center mb-16'>Our Achievement</h1>
      <div className='grid justify-items-center grid-cols-1 lg:grid-cols-4 gap-4'>
        <div>
          <AiOutlineFlag className='text-4xl' />
          <h1 className='text-2xl font-bold'>25+</h1>
          <h2 className='text-xl font-bold'>Countries</h2>
        </div>
        <div>
          <GiProfit className='text-4xl' />
          <h1 className='text-2xl font-bold'>90M+ </h1>
          <h2 className='text-xl font-bold'>Annual revenue</h2>
        </div>
        <div>
          <BsTools className='text-4xl' />
          <h1 className='text-2xl font-bold'>30+</h1>
          <h2 className='text-xl font-bold'> Tools</h2>
        </div>
        <div>
          <BiHappyAlt className='text-4xl' />
          <h1 className='text-2xl font-bold'>175+</h1>
          <h2 className='text-xl font-bold'>Happy Clients</h2>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;