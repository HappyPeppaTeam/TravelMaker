const memberValidateField = (fieldName, value, passowrd) => {
  let errorMessage = '';
  let checkPassword = passowrd;
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
    case 'originalPassword':
      if (!value) {
        errorMessage = '此欄位為必要';
      } else if (value.length < 6) {
        errorMessage = '密碼長度必須大於6字元';
      }
      break;
    case 'newPassword':
      if (!value) {
        errorMessage = '此欄位為必要';
      } else if (value !== passowrd) {
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
  // for (let pair of userData.entries()) {
  //   console.log(pair[0], pair[1]);
  // }
  let valid = true;
  // alert([...userData.entries()].map(entry => entry.join(': ')).join('\n'));
  if (userData.has("username") && !userData.get('username')) {
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (userData.has("email") && !userData.get('email')) {
    valid = false;
  } else if (userData.has("email")&&!emailPattern.test(userData.get('email'))) {
    valid = false;
  }

  if (userData.has("password") && !userData.get('password')) {
    valid = false;
  } else if (userData.has("password") && userData.get('password').length < 6) {
    valid = false;
  }

  if (userData.has("originalPassword") && !userData.get('originalPassword')) {
    valid = false;
  } else if (userData.has("originalPassword") && userData.get('originalPassword').length < 6) {
    valid = false;
  }
  if (userData.has("confirmPassword") && !userData.get('confirmPassword')) {
    valid = false;
  } else if (userData.has("confirmPassword") && userData.get('confirmPassword') !== userData.get('password')) {
    valid = false;
  }
  if (userData.has("newPassword") && !userData.get('newPassword')) {
    valid = false;
  } else if (userData.has("newPassword") && userData.get('newPassword') !== userData.get('originalPassword')) {
    valid = false;
  }

  if (userData.has("fullName") && !userData.get('fullName')) {
    valid = false;
  }

  if (userData.has("nickName") && !userData.get('nickName')) {
    valid = false;
  }

  if (userData.has("birthday") && !userData.get('birthday')) {
    valid = false;
  }

  if (userData.has("gender") && !userData.get('gender')) {
    valid = false;
  }
  return valid;
};
const calculatePasswordStrength = (password) => {
  // Implement your password strength calculation algorithm here
  const lengthScore = password.length > 7 ? 2 : 1;
  const complexityScore = /[!@#$%^&*()_+{}\[\]:;<>,.?~-]/.test(password) ? 2 : 1;
  return lengthScore + complexityScore;
};

const getPasswordStrengthLabel = (strength) => {
  let label = '';
  let color = '';
  if (strength >= 4) {
    label = '強';
    color = 'green';
  } else if (strength >= 3) {
    label = '中';
    color = 'orange';
  } else {
    label = '弱';
    color = 'red';
  }
  return <span style={{ color }}>{label}</span>;
};
export { memberValidateField, registerFormValidate, calculatePasswordStrength, getPasswordStrengthLabel }; // 匯出 memberValidateField 函式
