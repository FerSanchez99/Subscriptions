import React from 'react';
import { useEffect, useState } from 'react';

const SubscriptionContainer = ({subscription, active}) => {

  const checkIfLoggedIn = (e) => {
    e.preventDefault();
    if(!localStorage.getItem('JWT')){
      return navigate("/login")
    }
    send_create_checkout_session()
  }

  const send_create_checkout_session = () => {
    if(!subscription.lookup_key) return;

    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const raw = JSON.stringify({
      "user_id": localStorage.getItem('userId'),
      "bearer": localStorage.getItem('JWT'),
      "lookup_key": subscription.lookup_key
    });

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: raw
    };

    fetch(`/create-checkout-session`, requestOptions)
      .then((response) => {
        console.log(response);
        //TODO Mandar llamar activate_costumer
      })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }
  
  return <>
    <div className="min-h-110 rounded md:w-90 mx-2 bg-[#fbf7fc] p-3 shadow-sm flex flex-col justify-between relative">
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
        <div className='cursor-pointer bg-primary rounded text-center w-full block py-2 hover:bg-secondary' onClick={checkIfLoggedIn}>
            <span className='text-white uppercase'>Contratar</span>
        </div>
      </div>
    </div>
  </>;
};

export default SubscriptionContainer;