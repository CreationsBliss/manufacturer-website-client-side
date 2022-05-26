import React from 'react';

const MyPortfolio = () => {
  return (
    <div className='max-w-6xl mx-auto py-16 px-10'>
      <h1 className='text-center font-bold text-4xl mb-10'>My Portfolio</h1>

      <h2 className='text-xl font-bold mt-8'>Name: Musfakur Rahman</h2>
      <h5 className='text-xl mt-2'>Email: procreationsbliss@gmail.com</h5>
      <div class="overflow-x-auto mt-16">
        <table class="table w-full">

          <thead>
            <tr>
              <th>Educational background</th>
              <th>Skills</th>
              <th>Project Sample</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>SSS - Gotegari Shaheed Mamun High School</td>
              <td>HTML, CSS, Bootstrap, TailwindCSS</td>
              <td><a href="https://bookly-book.netlify.app/" className='underline decoration-1 text-blue-700'>https://bookly-book.netlify.app/</a></td>
            </tr>

            <tr class="hover">
              <td>HSC - Mohammmadpur Model College</td>
              <td>JavaScript, React, Node, MongoDB</td>
              <td><a href="https://choosy-mart.netlify.app/" className='underline decoration-1 text-blue-700'>https://choosy-mart.netlify.app/</a></td>
            </tr>

            <tr>
              <td>BSC - East West University</td>
              <td>WordPress, Figma, Photoshop</td>
              <td><a href="https://dollar-boss.netlify.app/" className='underline decoration-1 text-blue-700'>https://dollar-boss.netlify.app/</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPortfolio;