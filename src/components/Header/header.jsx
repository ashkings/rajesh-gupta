import React from 'react';
import logo from '../../images/header.png';
import './header.scss';

const Header = () => {
  return (
    <div className='bg-[#263F5B] h-32 p-4'>
      <img src={logo} className='w-full h-24 logo' />
    </div>
  );
};

export default Header;
