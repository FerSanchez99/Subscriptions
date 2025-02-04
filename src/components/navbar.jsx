import React from 'react';
import Logo from '../assets/zurii-clearbg.svg'

const Navbar = () => {
  return <>
    <div className="top-0 fixed bg-primary h-14 w-screen flex items-center px-2">
      <img src={Logo} className="h-10" />
    </div>
  </>;
};

export default Navbar;