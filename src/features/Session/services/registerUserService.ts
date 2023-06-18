import { v4 as uuidv4 } from 'uuid';
import { USER_LOCAL_STORAGE_KEY } from '@/const/general';
import { User } from '../models/userModel';

const registerUserService = async (data: User): Promise<User> => {
  const newUser: User = {
    id: uuidv4(),
    fullName: data.fullName,
    email: data.email,
    token: uuidv4()
  };
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(newUser));
  return newUser;
};

export default registerUserService;
