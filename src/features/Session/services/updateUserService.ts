import { USER_LOCAL_STORAGE_KEY } from '@/const/general';

const updateUserService = async (data: any) => {
  const userSaved = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  if (!userSaved) {
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify({ id: new Date().getTime(), ...data }));
  } else {
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify({ ...data }));
  }
  return true;
};

export default updateUserService;
