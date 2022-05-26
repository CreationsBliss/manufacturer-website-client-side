import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import auth from '../../firebase.init';
// import DeleteOrderModal from './DeleteOrderModal';
// import OrdersRow from './OrdersRow';

const MyOrders = () => {

  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();


  // const [deletingOrder, setDeletingOrder] = useState(null);


  useEffect(() => {
    if (user) {
      fetch(`https://thawing-depths-22036.herokuapp.com/order?userEmail=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          console.log('res', res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
          }
          return res.json()
        })
        .then(data => {

          setOrders(data);
        });
    }
  }, [user]);




  // const handleOrderDelete = id => {
  //   fetch(`https://thawing-depths-22036.herokuapp.com/order/${id}`, {
  //     method: 'DELETE'
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     if(data.deletedCount){
  //       toast.success('Order is deleted');
  //     }
  //   })
  // }


  return (
    <div>
      <h1 className='text-2xl font-bold my-5'>My Orders: {orders.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Product Quantity</th>
              <th>Payment</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>

            {
              orders.map((order, index) => <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.userName}</td>
                <td>{order.userEmail}</td>
                <td>{order.productName}</td>
                <td>{order.productQuantity}</td>
                <td>
                  {(order.productPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}> <button className='btn btn-primary'> Pay Now</button></Link>}
                  {(order.productPrice && order.paid) && <div>
                    <p> <span className='text-primary font-bold'> Paid </span> </p>
                    <p> Transaction Id: <span className='text-primary font-bold'> {order.transactionId} </span> </p>
                  </div>}
                </td>

                {/* <td>
                  <label for="delete-order-modal" onClick={() => setDeletingOrder(order)} class="btn btn-error"> Delete </label>
                </td> */}

              </tr>)
            }
          </tbody>
        </table>
      </div>

      {/* {deletingOrder && <DeleteOrderModal deletingOrder={deletingOrder}></DeleteOrderModal> } */}

    </div>
  );
};

export default MyOrders;