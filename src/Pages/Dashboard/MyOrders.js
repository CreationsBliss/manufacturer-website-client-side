import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?userEmail=${user.email}`, {
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
  }, [user])

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
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;