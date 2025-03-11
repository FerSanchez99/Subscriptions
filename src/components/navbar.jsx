import React from 'react';
import Logo from '../assets/zurii-clearbg.svg'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return <>
    <Link to="/">
      <div className="top-0 fixed bg-primary h-14 w-screen flex items-center px-2 z-30">
        <img src={Logo} className="h-10" />
      </div>
    </Link>
    <Outlet />
  </>;
};

export default Navbar;