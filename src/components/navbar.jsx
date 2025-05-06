import React from 'react';
import Logo from '../assets/zurii-clearbg.svg'
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('JWT')){
      setLoggedIn(true)
    }else{
      setLoggedIn(false)
    }
  })

  const LogOut = () => {
    localStorage.removeItem('JWT')
    window.location.reload();
  }


  return <>
    <div className="top-0 fixed bg-primary h-14 w-screen flex items-center px-2 z-30 justify-between">
      <Link to="/">
        <div className="">
          <img src={Logo} className="h-10" />
        </div>
      </Link>
      {loggedIn && <div>
        <span className="text-white text-semibold cursor-pointer" onClick={() => LogOut()}>Cerrar sesión</span>
      </div>}
    </div>
    <Outlet />
  </>;
};

export default Navbar;