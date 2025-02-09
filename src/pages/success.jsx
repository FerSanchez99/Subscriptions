import React from 'react';
import { useState } from 'react';
import "react-multi-carousel/lib/styles.css";

const Success = () => {
  const [sessionId, setSessionId] = useState('');
  return <>
    <div className='bg-white rounded shadow-2xl mx-20 p-20 text-center'>
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
          Manage your billing information
        </button>
      </form>
    </div>
  </>
};

export default Success;