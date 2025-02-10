import React from 'react';
import { useState, useEffect } from 'react';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const Cancel = () => {
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setSessionId(query.get('session_id'))
  }, [])

  return <>
    <div className='bg-white rounded shadow-2xl mx-5 md:mx-20 p-20 text-center'>
      <div className="product Box-root">
        <div className="description Box-root">
          <h3 className='font-bold text-primary text-2xl px-10'>Pedido cancelado: sigue navegando las suscripciones disponibles y realiza el pago cuando estés listo.</h3>
        </div>
      </div>
      <Link to='/'>
        <div className='cursor-pointer bg-indigo-50 rounded text-center mt-5 mx-auto block py-2 hover:bg-indigo-200 w-fit px-5'>
          <span className='text-primary uppercase'>Ver suscripciones</span>
        </div>
      </Link>
    </div>
  </>
};

export default Cancel;