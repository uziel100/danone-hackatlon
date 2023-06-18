import { getErrorMessage } from '@/utils/index';
import registerUserService from '../services/registerUserService';
import { User } from '../models/userModel';

const useUserProfile = () => {
  const registerUser = async (data: User): Promise<User> => {
    try {
      const response = await registerUserService(data);
      return response;
    } catch (error) {
      throw new Error(getErrorMessage(error));
    }
  };

  return {
    registerUser
  };
};

export default useUserProfile;
