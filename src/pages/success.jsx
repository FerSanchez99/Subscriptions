import React from 'react';
import { useState, useEffect } from 'react';
import "react-multi-carousel/lib/styles.css";

const Success = () => {
  const [sessionId, setSessionId] = useState('');

  useEffect(async() => {
    const query = new URLSearchParams(window.location.search);
    await setSessionId(query.get('session_id'));
    activateCustomer();
  }, [])

  const activateCustomer = () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const raw = JSON.stringify({
      "session_id": sessionId
    });

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: raw
    };

    fetch(`https://ssl.zurii.io/api/activate-customer`, requestOptions)
      .then((response) => console.log(response))
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  } 

  return <>
    <div className='bg-white rounded shadow-2xl mx-5 md:mx-20 p-20 text-center'>
      <div className="product Box-root">
        <div className="description Box-root">
          <h3 className='font-bold text-primary text-2xl'>¡Suscripción exitosa!</h3>
        </div>
      </div>
      <form action="/create-portal-session" method="POST">
        <input
          type="hidden"
          id="session-id"
          name="session_id"
          value={sessionId}
        />
        <button id="checkout-and-portal-button" type="submit">
          Gestiona tu información de facturación
        </button>
      </form>
    </div>
  </>
};

export default Success;