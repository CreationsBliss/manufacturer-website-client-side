import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3Oq1HSzuc87IKO7LGcDVzUQ9THs4G5BlkqD2aD4hS2Nm8UtL1cayy7ib97UavJBilevmklBcHqPr6Lb3zZPHQy00qXOrhnSn');

const Payment = () => {

  const { id } = useParams();
  const url = `https://thawing-depths-22036.herokuapp.com/order/${id}`;

  const { data: placeOrder, isLoading } = useQuery(['order', id], () => fetch(url, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>

      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <h2 class="card-title">Product Name:  {placeOrder.productName} </h2>
          <p>Price ${placeOrder.productPrice} </p>
        </div>
      </div>

      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm placeOrder ={placeOrder} />
          </Elements>

        </div>
      </div>
    </div>
  );
};

export default Payment;