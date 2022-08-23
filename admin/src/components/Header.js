/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/css/header.css';

import { Link } from 'react-router-dom';

import { userState } from '../recoil/user';
import { useRecoilValue } from 'recoil';

import { isLoginUser } from '../utils/user';

import LogoutBox from './LogoutBox';

export default function Header() {
  const user = useRecoilValue(userState);
  return (
    <header>
      <div className='header_container'>
        <Link to='/' className='header_logo'>
          <img src='signature_horizontal_color.png' alt='코드스테이츠 로고' />
        </Link>
        <ul className='header_menu'>
          <li className='header_logout'>
            {isLoginUser(user) ? <LogoutBox /> : null}
          </li>
        </ul>
      </div>
    </header>
  );
}
