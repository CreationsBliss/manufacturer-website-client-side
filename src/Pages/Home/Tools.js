import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {

  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch('https://thawing-depths-22036.herokuapp.com/tool')
      .then(res => res.json())
      .then(data => setTools(data));
  }, [])

  return (
    <div className='px-28 py-16'>
      <h1 className='text-4xl font-bold text-center mb-16'>Tools We Manufacture</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {
          tools.map(tool => <Tool key={tool._id} tool={tool} ></Tool>)
        }
      </div>
    </div>
  );
};

export default Tools;