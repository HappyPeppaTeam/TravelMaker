const memberValidateField = (fieldName, value,passowrd) => {
  let errorMessage = '';
  let checkPassword=passowrd;
  switch (fieldName) {
    case 'username':
      if (!value) {
        errorMessage = '此欄位為必要';
      }
      break;
    case 'email':
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        errorMessage = '此欄位為必要';
      } else if (!emailPattern.test(value)) {
        errorMessage = '電子郵件格式錯誤';
      }
      break;
    case 'password':
      if (!value) {
        errorMessage = '此欄位為必要';
      } else if (value.length < 6) {
        errorMessage = '密碼長度必須大於6字元';
      }
      break;
    case 'confirmPassword':
      if (!value) {
        errorMessage = '此欄位為必要';
      } else if (value !== checkPassword) {
        errorMessage = '與密碼不相符';
      }
      break;
      case 'fullName':
      if (!value) {
        errorMessage = '此欄位為必要';
      }
      break;
    default:
      break;
  }

  return errorMessage;
};

export { memberValidateField }; // 匯出 memberValidateField 函式
