import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SubscriptionContainer = ({subscription, active}) => {

  const send_create_checkout_session = () => {
    console.log('Redirecting to payment')
    if(!subscription.lookup_key) return;
    axios.post('https://ssl.zurii.io/api/create-checkout-session', {
      user_id: localStorage.getItem('userId'),
      bearer: localStorage.getItem('JWT'),
      lookup_key: subscription.lookup_key
    })
    .then(function (response) {
      window.open(response.data['url'], '_blank').focus();
    })
    .catch(function (error) {
      console.log(error.data);
    })
  }
  
  return <>
    <div className=" text-gray-900 min-h-110 rounded md:w-90 mx-2 bg-[#fbf7fc] p-3 shadow-sm flex flex-col justify-between relative">
      {active && <span className='bg-indigo-300 z-10 absolute px-2 py-1 right-0 top-0 rounded font-semibold'>ACTIVA</span>}
      <div>
        <span className='font-semibold text-xl'>{subscription.titulo}</span>
        <p className='my-1'>{subscription.descripcion}</p>
        <p className='text-center mb-5'>
          <span className="font-bold text-2xl">{subscription.precio}</span>
          MXN &nbsp;
          <span className='font-bold'>{subscription.modalidad}</span>
        </p>
        <hr />
        <ul>
          {subscription.beneficios.map((benefit, index) => (
            <li className='mt-2' key={index}>{`• ${benefit}`}</li>
          ))}
        </ul>
      </div>
      <div>
        {/* <form action="/create-checkout-session" method="POST">
          <input type="hidden" name="lookup_key" value={subscription.lookup_key} />
          <div id="checkout-and-portal-button" type="submit" className='cursor-pointer bg-primary rounded text-center w-full block py-2 hover:bg-secondary' onClick={checkIfLoggedIn}>
            <span className='text-white uppercase'>Contratar</span>
          </div>
        </form> */}
        <div className='cursor-pointer bg-primary rounded text-center w-full block py-2 hover:bg-secondary' onClick={send_create_checkout_session}>
            <span className='text-white uppercase'>Contratar</span>
        </div>
      </div>
    </div>
  </>;
};

export default SubscriptionContainer;