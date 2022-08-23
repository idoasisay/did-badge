import React, { useEffect } from 'react';

import { DefaultValue, useRecoilState } from 'recoil';
import { userState } from '../recoil/user';

import { useNavigate } from 'react-router-dom';
import { getAccessCode } from '../apis/server';

export default function OauthLoginHandler() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  const [user, setUser] = useRecoilState(userState);

  function errorHandle() {
    setUser(new DefaultValue());
  }

  useEffect(() => {
    async function fetchData() {
      const userData = await getAccessCode(code);
      const { data } = userData;

      if (!data.message) {
        setUser({ ...data, isLogin: true });
        navigate('/');
      } else errorHandle();
    }

    fetchData();
  }, []);

  return;
}
