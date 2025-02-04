import React from 'react';
import Logo from '../assets/zurii-clearbg.svg'

const SubscriptionContainer = ({subscription}) => {
  return <>
    <div className="min-h-100 rounded mx-2 bg-[#fbf7fc] p-3 shadow-sm flex flex-col justify-between">
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
          <a className='bg-primary rounded text-center w-full block py-2 hover:bg-secondary'>
            <span className='text-white uppercase'>Contratar</span>
          </a>
      </div>
    </div>
  </>;
};

export default SubscriptionContainer;