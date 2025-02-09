import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PasswordIcon from '@mui/icons-material/Password';

const Payment = () => {
  const location = useLocation();
  const { subscription } = location.state || {}; // Safely accessing the state

  const [cardNumer, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [CVV, setCVV] = useState('');
  const [errors, setErrors] = useState({})

  const handleSubmit = () => {

  }

  return (
    <div className='px-60'>
      <Link to='/'>
        <span className='text-primary underline'>Ver todos los planes</span>
      </Link>
      <div className='bg-white rounded min-h-20 p-5 shadow-2xl mt-3'>
        <span className='font-light'>Plan escogido:</span> <br />
        <span className='font-bold text-primary text-xl'>{subscription?.titulo}</span> <br />
        <span className=''>{subscription?.descripcion}</span> <br />
        <hr className='my-3' />
        <div className='flex flex-row justify-between'>
          <span className='font-bold'>Total:</span>
          <span className='font-bold text-primary text-xl text-end'>{`$${subscription?.precio} ${subscription?.modalidad}`}</span>
        </div>
      </div>
      <div className='bg-white rounded min-h-20 shadow-2xl mt-5 flex flex-col p-5'>
          <span className='font-semibold text-primary text-xl'>Pago con tarjeta</span>
          <div id='form-inputs' className='mx-20 px-5 border border-gray-100 mt-3'>
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 1 }}>
                <CreditCardIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
                <TextField fullWidth label="Número de tarjeta" variant="standard" />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 1 }}>
                <PersonIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
                <TextField fullWidth label="Nombre en la tarjeta" variant="standard" />
              </Box>
              <div className='flex flex-row justify-between'>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 1 }}>
                  <CalendarMonthIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
                  <TextField id="standard-basic" label="Mes" variant="standard" sx={{ color: 'black', mr: 1}} />
                  /
                  <TextField id="standard-basic" label="Año" variant="standard" sx={{ color: 'black', ml: 1}} />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 1 }}>
                  <PasswordIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
                  <TextField id="standard-basic" label="CVV" variant="standard"/>
                </Box>
              </div>
              <div
                className='bg-primary rounded text-center w-full block py-2 mb-2 hover:bg-secondary mt-10'
                onClick={handleSubmit}
              >
                <span className='text-white uppercase'>PAGAR</span>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Payment;