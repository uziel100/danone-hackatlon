const isANumberPhoneValid = (phone: string) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(phone);
};

export default isANumberPhoneValid;
