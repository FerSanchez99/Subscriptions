import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Email from '@mui/icons-material/Email';
import Person from '@mui/icons-material/Person';
import Password from '@mui/icons-material/Password';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('')
  const [firstSurname, setFirstSurname] = useState('')
  const [secondSurname, setSecondSurname] = useState('')
  const [signUpError, setSignUpError] = useState(false);
  const [openModal, setOpenModal] = useState(false)

  const signUp = () => {
    axios.post(`${import.meta.env.VITE_API_URL}/User/CreateMainB2C`, {
      FirstName: firstName,
      FirstLastName: firstSurname,
      SecondLastName: secondSurname,
      Email: email 
    })
    .then((response) => {
      setOpenModal(true)
      console.log(response.data)
    })
    .catch((error) => {
      setSignUpError(true)
    })
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
  };

  return <>
    <div className='bg-white rounded shadow-2xl mx-auto w-[90%] md:w-[40%] text-center p-2 md:p-5'>
      <h2 className="text-center text-primary text-2xl font-semibold">¡Crea tu cuenta y empieza a disfrutar de todos los beneficios!</h2>
      <span className="text-xl">Solo toma un momento, ¡y todo lo que ofrecemos estará al alcance de tu mano!</span>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="text-center">
            <h2 className="text-2xl text-primary">Cuenta creada exitosamente</h2>
            <span className="text-xl text-black">Ingrese al sitio usando la contraseña enviada al correo registrado y podrá seleccionar una suscripción para empezar a disfrutar los beneficios de Zurii.</span>
            <span className="text-primary hover:text-secondary underline block mt-3" onClick={() => navigate("/login")}>Ingresar al sitio</span>
          </div>
        </Box>
      </Modal>
      <div className='mx-auto p-5 rounded-xl md:w-[70%] mt-5 flex flex-col justify-between'>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 1 }}>
          <Email sx={{ color: 'black', mr: 1, my: 0.5 }} />
          <TextField fullWidth label="Correo electrónico" variant="outlined" value={email} onChange={(event) => {
            setEmail(event.target.value);
          }}/>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 1 }}>
          <Person sx={{ color: 'black', mr: 1, my: 0.5 }} />
          <TextField fullWidth label="Nombre" variant="outlined" value={firstName} onChange={(event) => {
            setFirstName(event.target.value);
          }}/>
        </Box><Box sx={{ display: 'flex', alignItems: 'flex-end', my: 1 }}>
          <Person sx={{ color: 'black', mr: 1, my: 0.5 }} />
          <TextField fullWidth label="Primer Apellido" variant="outlined" value={firstSurname} onChange={(event) => {
            setFirstSurname(event.target.value);
          }}/>
        </Box><Box sx={{ display: 'flex', alignItems: 'flex-end', my: 1 }}>
          <Person sx={{ color: 'black', mr: 1, my: 0.5 }} />
          <TextField fullWidth label="Segundo Apellido" variant="outlined" value={secondSurname} onChange={(event) => {
            setSecondSurname(event.target.value);
          }}/>
        </Box>
        <div className='cursor-pointer bg-primary rounded text-center mt-5 w-full block py-2 hover:bg-secondary' onClick={() => signUp()}>
          <span className='text-white uppercase'>Crear cuenta</span>
        </div>
        <span className='text-primary underline cursor-pointer hover:text-secondary' onClick={() => navigate("/login")}>Regresar</span>
        {signUpError && <span className='text-red-500 mt-3'>Error al crear usuario. Por favor intente otra vez más tarde.</span>}
      </div>
    </div>
  </>
};

export default SignUp;