import React, { FC, useEffect, useMemo, useReducer } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import { SessionContext, SessionContextState } from './SessionContext';
import { User, UserSettings } from '../models/userModel';
import sessionReducer from './sessionReducer';

interface Props {
  children: React.ReactNode;
}

const INITIAL_STATE: SessionContextState = {
  user: null
};

const createInitialState = (): SessionContextState => {
  if (typeof window === 'undefined') return INITIAL_STATE;

  const dataOfLocalStorage = localStorage.getItem('user');
  if (dataOfLocalStorage) {
    const user = JSON.parse(dataOfLocalStorage);
    return { ...INITIAL_STATE, user };
  }
  return INITIAL_STATE;
};

const SessionProvider: FC<Props> = ({ children }) => {
  const [, setStateLocalStorage] = useLocalStorage<User | null>('user', null);
  const [state, dispatch] = useReducer(sessionReducer, INITIAL_STATE, () => createInitialState());

  const onRegisterUser = (data: User) => dispatch({ type: 'REGISTER_USER', payload: data });
  const onLogout = () => dispatch({ type: 'LOGOUT' });
  const onUpdateUser = (data: User) => dispatch({ type: 'UPDATE_USER', payload: data });
  const onUpdateCalories = (data: UserSettings) => dispatch({ type: 'UPDATE_CALORIES', payload: data });

  const memorized = useMemo(
    () => ({
      ...state,
      onRegisterUser,
      onLogout,
      onUpdateUser,
      onUpdateCalories
    }),
    [state]
  );

  useEffect(() => {
    setStateLocalStorage(state.user as User);
  }, [state.user]);

  return <SessionContext.Provider value={memorized}>{children}</SessionContext.Provider>;
};
export default SessionProvider;
