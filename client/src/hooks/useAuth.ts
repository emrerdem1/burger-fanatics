import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRefreshToken, persistLogin, userSelector } from 'redux/auth/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  useEffect(() => {
    if (user) return;
    const token = getRefreshToken();
    token.user && dispatch(persistLogin());
  }, [user]);

  return useMemo(() => ({ user }), [user]);
};
