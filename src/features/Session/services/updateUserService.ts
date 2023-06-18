const updateUserService = async (data: any) => {
  const userSaved = localStorage.getItem('user');
  if (!userSaved) {
    localStorage.setItem('user', JSON.stringify({ id: new Date().getTime(), ...data }));
  } else {
    localStorage.setItem('user', JSON.stringify({ ...data }));
  }
  return true;
};

export default updateUserService;
