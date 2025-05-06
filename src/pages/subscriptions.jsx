import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubscriptionContainer from '../components/subscriptionsContainer';
import "react-multi-carousel/lib/styles.css";
import dummySubscriptions from '../assets/dummy/subscriptions.json';
import Close from '@mui/icons-material/Close';
import axios from 'axios';

const Subscriptions = () => {
  const [currentSuscriptionId, setCurrentSuscriptionId] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [loginSucess, setLoginSucess] = useState(false);
  const [userName, setUserName] = useState('');
  const [hasSuscription, setHasSuscription] = useState(false)
  const navigate = useNavigate();

  const checkIfLoggedIn = () => {
    if(!localStorage.getItem('JWT')){
      return navigate("/login");
    }
  }

  useEffect(() => {
    if(localStorage.getItem('JWT')){
      const options = {
        method: 'GET',
        url: `${import.meta.env.VITE_API_URL}/user/user_tier?`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('JWT')}`
        }
      };
      
      axios.request(options).then(function (response) {
        if(response.data['res'] == 'Free'){
          setHasSuscription(false);
        }else{
          setHasSuscription(true);
        }
      }).catch(function (error) {
        console.error(error)
      });
      setLoginSucess(true)
      setUserName(localStorage.getItem('userName'))
    }else{
      checkIfLoggedIn()
    }
    if(subscriptions.length == 0) {
      fetchSubscriptions();
    }
  }, [])

  const fetchSubscriptions = () => {

    axios.get(`${import.meta.env.VITE_API_URL}/stripe_suscriptions`)
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
      <div className='w-full flex flex-col justify-items-center'>
        <div className='w-5/6 md:w-3/4 bg-white rounded-xl p-3 md:p-10 shadow-2xl mx-auto'>
          <span className='text-xl text-primary'>Bienvenid@
            <span className='font-semibold'>{` ${userName}`}</span>
          </span>
        </div>
        <div className='w-5/6 md:w-3/4 bg-white rounded-xl p-3 md:p-10 m-5 shadow-2xl mx-auto'>
          {hasSuscription && <div>
            <span className='text-primary text-2xl font-bold text-center'>El usuario ya tiene una suscripción activa</span>
          </div>}
          {!hasSuscription && <div>
            <p className='text-primary text-3xl font-bold text-center'>Elige tu plan y accede a todas las ventajas</p>
            <br />
            <p className="font-light text-lg text-center text-gray-900">
              Para continuar usando la aplicación, selecciona una de las opciones de suscripción disponibles. ¡Cada plan está diseñado para ofrecerte la mejor experiencia según tus necesidades!
            </p>
            <br />
            <div className="flex flex-col md:flex-row md:justify-evenly gap-5 relative">
              {subscriptions.length > 0 && subscriptions.map((sub, i) => {
                return <SubscriptionContainer subscription={sub} key={i} active={currentSuscriptionId.includes(sub.id)} />
              })}
            </div>
          </div>}
        </div>
      </div>
    </div>
  </>
};

export default Subscriptions;