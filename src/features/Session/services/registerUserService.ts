import { v4 as uuidv4 } from 'uuid';
import { User } from '../models/userModel';

const registerUserService = async (data: User): Promise<User> => {
  const newUser: User = {
    id: uuidv4(),
    fullName: data.fullName,
    email: data.email,
    password: data.password,
    token: uuidv4()
  };
  localStorage.setItem('user', JSON.stringify(newUser));
  return newUser;
};

export default registerUserService;
