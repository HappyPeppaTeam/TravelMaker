const memberValidateField = (fieldName, value) => {
  let errorMessage = '';
  switch (fieldName) {
    case 'username':
      if (!value) {
        errorMessage = 'Username is required';
      }
      break;
    case 'email':
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        errorMessage = 'Email is required';
      } else if (!emailPattern.test(value)) {
        errorMessage = 'Invalid email format';
      }
      break;
    case 'password':
      if (!value) {
        errorMessage = 'Password is required';
      } else if (value.length < 6) {
        errorMessage = 'Password must be at least 6 characters';
      }
      break;
    default:
      break;
  }

  return errorMessage;
};

export { memberValidateField }; // 匯出 memberValidateField 函式
