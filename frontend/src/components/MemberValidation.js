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
      case 'nickName':
      if (!value) {
        errorMessage = '此欄位為必要';
      }
      break;
      case 'birthday':
      if (!value) {
        errorMessage = '此欄位為必要';
      }
      break;
      case 'gender':
      if (!value) {
        errorMessage = '此欄位為必要';
      }
      break;
    default:
      break;
  }

  return errorMessage;
};

const registerFormValidate = (userData) => {
  
  let valid = true;

      if (!userData.username) {
        valid=false;
      }
      
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!userData.email) {
        valid=false;
      } else if (!emailPattern.test(userData.email)) {
        valid=false;
      }

      if (!userData.password) {
        valid=false;
      } else if (userData.password.length < 6) {
        valid=false;
      }
  
      if (!userData.confirmPassword) {
        valid=false;
      } else if (userData.confirmPassword !== userData.password) {
        valid=false;
      }

      if (!userData.fullName) {
        valid=false;
      }

      if (!userData.nickName) {
        valid=false;
      }

      if (!userData.birthday) {
        valid=false;
      }

      if (!userData.gender) {
        valid=false;
      }
  return valid;
};
export { memberValidateField ,registerFormValidate}; // 匯出 memberValidateField 函式
