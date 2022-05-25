import React from 'react';

const ToolRow = ({ tool, index }) => {

  const { name, picture, pricePerUnit } = tool;



  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-16 rounded">
            <img src={picture} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{pricePerUnit}</td>
      <td> <button className='btn btn-error'>Delete</button> </td>
    </tr>
  );
};

export default ToolRow;