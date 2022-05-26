import React from 'react';
import { toast } from 'react-toastify';

const ToolRow = ({ tool, index, refetch, setDeletingTool }) => {

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
      <td>
        <label onClick={() => setDeletingTool(tool)} for="delete-confirm-modal" class="btn btn-error">Delete</label>
      </td>
    </tr>
  );
};

export default ToolRow;