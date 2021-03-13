import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from '@store/index';
import { commonActions } from '@store/common';

const AccountPage = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.user.isLogged);

  const setValidateMode = (value: boolean) => {
    dispatch(commonActions.setValidateMode(value));
  };

  useEffect(() => {
    console.log('[AccountPage] isLogged: ', isLogged);
    setValidateMode(true);
  }, []);
  return <h1>AccountPage</h1>;
};

export default AccountPage;
