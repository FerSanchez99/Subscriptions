import React from 'react';
import { useEffect, useState } from 'react';
import SubscriptionContainer from '../components/subscriptionsContainer';
import "react-multi-carousel/lib/styles.css";
import dummySubscriptions from '../assets/dummy/subscriptions.json';
import Close from '@mui/icons-material/Close';
import axios from 'axios';

const Subscriptions = () => {
  const [currentSuscriptionId, setCurrentSuscriptionId] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [loginSucess, setLoginSucess] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('JWT')){
      // TODO: Checar suscripciones vigentes
      // setCurrentSuscriptionId(response)
      setLoginSucess(true)
    }
    if(subscriptions.length == 0) {
      fetchSubscriptions();
    }
  }, [])

  const fetchSubscriptions = () => {

    axios.get('http://dev.zurii.io/api/stripe_suscriptions')
    .then(function (response) {
      setSubscriptions(response.data);
    })
    .catch(function (error) {
      console.log(error.data);
      setSubscriptions(dummySubscriptions)
    })
  }

  return <>
    <div className='mt-20'>
      {loginSucess && <div className='bg-green-200 rounded-xl px-3 py-2 mx-10 flex justify-between items-center'>
        <span>Login exitoso</span>
        <Close sx={{ color: 'black', mr: 1, my: 0.5 }} onClick={() => setLoginSucess(false)} />
      </div>}
      <div className='w-full flex justify-center'>
        <div className='w-5/6 md:w-3/4 bg-white rounded-xl p-3 md:p-10 m-5 shadow-2xl'>
          <p className='text-primary text-3xl font-bold text-center'>Elige tu plan y accede a todas las ventajas</p>
          <br />
          <p className="font-light text-lg text-center">
            Para continuar usando la aplicación, selecciona una de las opciones de suscripción disponibles. ¡Cada plan está diseñado para ofrecerte la mejor experiencia según tus necesidades!
          </p>
          <br />
          <div className="flex flex-col md:flex-row md:justify-evenly gap-5 relative">
            {subscriptions.length > 0 && subscriptions.map((sub, i) => {
              return <SubscriptionContainer subscription={sub} key={i} active={currentSuscriptionId.includes(sub.id)} />
            })}
          </div>
        </div>
      </div>
    </div>
  </>
};

export default Subscriptions;