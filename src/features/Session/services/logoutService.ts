const logoutService = async () => {
  localStorage.removeItem('user');
  return true;
};

export default logoutService;
