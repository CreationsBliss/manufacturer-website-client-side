// import React from 'react';
// import { toast } from 'react-toastify';

// const DeleteOrderModal = ({ deletingOrder }) => {

//   const handleOrderDelete = id => {
//     fetch(`http://localhost:5000/order/${id}`, {
//       method: 'DELETE'
//     })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       if(data.deletedCount){
//         toast.success('Order is deleted');
//       }
//     })
//   }

//   const {productName} = deletingOrder;
  

//   return (
//     <div>
//       <input type="checkbox" id="delete-order-modal" class="modal-toggle" />
//       <div class="modal modal-bottom sm:modal-middle">
//         <div class="modal-box">
//           <h3 class="font-bold text-lg text-red-500">Are you to delete {productName} </h3>
//           <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
//           <div class="modal-action">
//           <label for="delete-order-modal" onClick={() => handleOrderDelete(order)} class="btn btn-error"> Delete </label>
//             <label for="delete-order-modal" class="btn">Cancel</label>
//           </div>
//         </div>
//       </div>
//     </div >
//   );
// };

// export default DeleteOrderModal;