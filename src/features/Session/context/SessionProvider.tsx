import React, { FC, useEffect, useMemo, useReducer } from 'react';
import { removeCookies } from 'cookies-next';
import useLocalStorage from '@/hooks/useLocalStorage';
import { TOKEN_COOKIE_KEY, USER_LOCAL_STORAGE_KEY } from '@/const/general';
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

  const dataOfLocalStorage = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  if (dataOfLocalStorage) {
    const user = JSON.parse(dataOfLocalStorage);
    return { ...INITIAL_STATE, user };
  }
  return INITIAL_STATE;
};

const SessionProvider: FC<Props> = ({ children }) => {
  const [, setStateLocalStorage] = useLocalStorage<User | null>(USER_LOCAL_STORAGE_KEY, null);
  const [state, dispatch] = useReducer(sessionReducer, INITIAL_STATE, () => createInitialState());

  const onRegisterUser = (data: User) => dispatch({ type: 'REGISTER_USER', payload: data });
  const onLogout = () => {
    removeCookies(TOKEN_COOKIE_KEY);
    dispatch({ type: 'LOGOUT' });
  };
  const onUpdateUser = (data: User) => dispatch({ type: 'UPDATE_USER', payload: data });
  const onUpdateCalories = (data: UserSettings) => dispatch({ type: 'UPDATE_CALORIES', payload: data });

  const onSubtractCalories = (caloriesToSubtract: number) => {
    try {
      if (state.user?.settings) {
        dispatch({
          type: 'UPDATE_CALORIES',
          payload: {
            calories: {
              consumed: state.user.settings.calories.consumed + caloriesToSubtract,
              remaining: state.user.settings.calories.remaining - caloriesToSubtract,
              total: state.user.settings.calories.total
            }
          }
        });
      }
    } catch (error) {
      throw new Error('Error al actualizar las calorías');
    }
  };

  const memorized = useMemo(
    () => ({
      ...state,
      onRegisterUser,
      onLogout,
      onUpdateUser,
      onSubtractCalories,
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
