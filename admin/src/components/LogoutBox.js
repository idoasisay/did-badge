import React from 'react';
import { Link } from 'react-router-dom';

export default function LogoutBox() {
  function LogoutEventHandler() {
    window.localStorage.clear();
    window.location.replace('/');
  }

  return (
    <div>
      <Link to='/' className='logoutButton' onClick={LogoutEventHandler}>
        ๋ก๊ทธ์์
      </Link>
    </div>
  );
}
