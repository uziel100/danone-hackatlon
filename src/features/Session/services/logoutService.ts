import { USER_LOCAL_STORAGE_KEY } from '@/const/general';

const logoutService = async () => {
  localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
  return true;
};

export default logoutService;
