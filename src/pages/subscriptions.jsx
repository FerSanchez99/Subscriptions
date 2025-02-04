import React from 'react';
import Carousel from "react-multi-carousel";
import SubscriptionContainer from '../components/subscriptionsContainer';
import "react-multi-carousel/lib/styles.css";
import dummySubscriptions from '../assets/dummy/subscriptions.json'

const Subscriptions = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return <>
    <div className='w-full flex justify-center'>
      <div className='w-3/4 bg-white rounded-xl p-10 m-5 shadow-2xl'>
        <p className='text-primary text-3xl font-bold text-center'>Elige tu plan y accede a todas las ventajas</p>
        <br />
        <p className="font-light text-lg text-center">
          Para continuar usando la aplicación, selecciona una de las opciones de suscripción disponibles. ¡Cada plan está diseñado para ofrecerte la mejor experiencia según tus necesidades!
        </p>
        <br />
        <Carousel responsive={responsive} arrows>
          {dummySubscriptions.map((sub, i) => {
            return <SubscriptionContainer subscription={sub} key={i} />
          })}
        </Carousel>
      </div>
    </div>
  </>
};

export default Subscriptions;