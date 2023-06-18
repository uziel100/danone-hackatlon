import { createContext, useContext } from 'react';
import { User, UserSettings } from '../models/userModel';

export interface SessionContextState {
  user: User | null;
}

export interface SessionContextProps extends SessionContextState {
  onRegisterUser: (data: User) => void;
  onLogout: () => void;
  onUpdateUser: (data: Partial<User>) => void;
  onUpdateCalories: (data: UserSettings) => void;
  onSubtractCalories: (data: number) => void;
}

export const SessionContext = createContext<SessionContextProps>({} as SessionContextProps);

export const useSessionContext = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSessionContext must be used within a SessionContext');
  }
  return context;
};
