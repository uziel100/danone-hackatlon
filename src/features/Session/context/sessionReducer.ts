import { User, UserSettings } from '../models/userModel';
import { SessionContextState } from './SessionContext';

type UiActionTypes =
  | { type: 'REGISTER_USER'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_USER'; payload: Partial<User> }
  | { type: 'UPDATE_CALORIES'; payload: UserSettings };

const sessionReducer = (state: SessionContextState, action: UiActionTypes) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'UPDATE_USER':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        }
      };
    case 'UPDATE_CALORIES':
      return {
        ...state,
        user: {
          ...state.user,
          settings: {
            ...state?.user?.settings,
            ...action.payload
          }
        }
      };
    default:
      return state;
  }
};

export default sessionReducer;
