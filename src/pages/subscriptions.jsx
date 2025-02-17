import React from 'react';
import { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import SubscriptionContainer from '../components/subscriptionsContainer';
import "react-multi-carousel/lib/styles.css";
import dummySubscriptions from '../assets/dummy/subscriptions.json';

const Subscriptions = () => {
  const [currentSuscriptionId, setCurrentSuscriptionId] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('JWT')){
      // TODO: Checar suscripciones vigentes
      // setCurrentSuscriptionId(response)
    }
    fetchSubscriptions();
  }, [])

  const fetchSubscriptions = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("http://dev.zurii.io/api/stripe_suscriptions", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => {
        console.error(error);
        setSubscriptions(dummySubscriptions);
      });
  }

  return <>
    <div className='w-full flex justify-center mt-15'>
      <div className='w-5/6 md:w-3/4 bg-white rounded-xl p-3 md:p-10 m-5 shadow-2xl'>
        <p className='text-primary text-3xl font-bold text-center'>Elige tu plan y accede a todas las ventajas</p>
        <br />
        <p className="font-light text-lg text-center">
          Para continuar usando la aplicación, selecciona una de las opciones de suscripción disponibles. ¡Cada plan está diseñado para ofrecerte la mejor experiencia según tus necesidades!
        </p>
        <br />
        <div className="flex flex-col md:flex-row md:justify-evenly gap-5 relative">
          {subscriptions.map((sub, i) => {
            return <SubscriptionContainer subscription={sub} key={i} active={currentSuscriptionId.includes(sub.id)} />
          })}
        </div>
      </div>
    </div>
  </>
};

export default Subscriptions;