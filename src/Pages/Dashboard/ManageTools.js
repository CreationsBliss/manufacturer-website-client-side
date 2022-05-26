import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ToolRow from './ToolRow';

const ManageTools = () => {

  const [deletingTool, setDeletingTool] = useState(null);

  const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('https://thawing-depths-22036.herokuapp.com/tools', {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h2 className='text-2xl font-bold my-5 mb-10 mt-3'>Manage Tools: {tools.length} </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              tools.map((tool, index) => <ToolRow key={tool._id} tool={tool} index={index} refetch={refetch} setDeletingTool={setDeletingTool}></ToolRow>)
            }
          </tbody>
        </table>
      </div>
      {
        deletingTool && <DeleteConfirmModal deletingTool={deletingTool}  refetch={ refetch} setDeletingTool={setDeletingTool} ></DeleteConfirmModal>
      }
    </div>
  );
};

export default ManageTools;