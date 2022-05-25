import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ToolRow from './ToolRow';

const ManageTools = () => {

  const { data: tools, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/tools', {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h2 className='text-2xl'>Manage Tools: {tools.length} </h2>
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
              tools.map((tool, index) => <ToolRow key={tool._id} tool={tool} index={index}></ToolRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTools;