import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingTool,  refetch, setDeletingTool={setDeletingTool} }) => {

  const { name } = deletingTool;

  const handleDelete = name => {

    fetch(`http://localhost:5000/tool/${name}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          toast.success(`Product Name: ${name} is deleted.`)
          setDeletingTool(null);
          refetch();
        }
      })
  }

  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">Do you want to delete ${name}</h3>
          <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div class="modal-action">
          <button onClick={() => handleDelete(name)} className='btn btn-error'>Delete</button>
            <label for="delete-confirm-modal" class="btn">Cancel</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;