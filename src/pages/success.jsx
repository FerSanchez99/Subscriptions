import React from 'react';
import { useState, useEffect } from 'react';
import "react-multi-carousel/lib/styles.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Success = () => {
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if(query.get('session_id') && !sessionId){
      sendActivateCustomer(query.get('session_id'))
    }
  }, [])

  const sendActivateCustomer = async (session_id_query) => {
    await setSessionId(session_id_query);
    activateCustomer();
  }

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

    fetch(`${import.meta.env.VITE_API_URL}/activate-customer`, requestOptions)
      .then((response) => console.log(response))
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  } 

  return <>
    <div className='flex flex-col'>
      <div className='bg-white rounded shadow-2xl  mx-auto p-5 md:p-20 text-center w-80 md:w-[50%] mt-5'>
        <CheckCircleIcon sx={{ color: '#3d0069', fontSize: 80  }} />
        <div className="product Box-root my-5">
          <div className="description Box-root">
            <h3 className='font-bold text-primary text-2xl'>¡Transacción exitosa!</h3>
            <span>¡Gracias por tu suscripción! Ahora tienes acceso completo a todos nuestros servicios. Disfruta de la experiencia y si tienes alguna duda, no dudes en contactarnos. ¡Bienvenido!</span>
          </div>
        </div>
        <form action={`${import.meta.env.VITE_API_URL}/create-portal-session`} method="POST">
          <input
            type="hidden"
            type="hidden"
            id="session-id"
            name="session_id"
            value={sessionId}
          />
          <button id="checkout-and-portal-button" type="submit">
            Gestiona tu suscripción
          </button>
        </form>
      </div>
    </div>
  </>
};

export default Success;