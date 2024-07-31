import React from 'react';
import logo from '../../images/logo-no-background.png';
import './header.scss';

const Header = () => {
  return (
    <div className='header bg-black h-32 p-4'>
      <img src={logo} className='logo h-24' />
    </div>
  );
};

export default Header;
