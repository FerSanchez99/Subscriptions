import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Email from '@mui/icons-material/Email';
import Password from '@mui/icons-material/Password';
import "react-multi-carousel/lib/styles.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getJWT = () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const requestOptions = {
      method: "POST",
      headers: headers
    };

    fetch(`http://dev.zurii.io/api/Authenticate?username=${email}&password=${password}`, requestOptions)
      .then((response) => console.log(response))
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  return <>
    <div className='bg-white rounded shadow-2xl mx-auto w-[40%] text-center p-5 h-150 flex items-center'>
      <div>
        <span className='text-primary font-semibold text-2xl text-center px-5'>
          Inicia sesión con tu cuenta de Zurii para poder suscribirte a un plan.
        </span>
        <div className='mx-auto p-5 rounded-xl w-[70%] mt-5 flex flex-col justify-between border border-gray-100'>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }}>
            <Email sx={{ color: 'black', mr: 1, my: 0.5 }} />
            <TextField fullWidth label="Correo electrónico" variant="outlined" value={email} onChange={(event) => {
              setEmail(event.target.value);
            }}/>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 2 }}>
            <Password sx={{ color: 'black', mr: 1, my: 0.5 }} />
            <TextField fullWidth label="Contraseña" variant="outlined" type="password" value={password} onChange={(event) => {
              setPassword(event.target.value);
            }}/>
          </Box>
          <div className='cursor-pointer bg-primary rounded text-center mt-5 w-full block py-2 hover:bg-secondary' onClick={() => getJWT()}>
            <span className='text-white uppercase'>Acceder</span>
          </div>
        </div>
      </div>
    </div>
  </>
};

export default Login;