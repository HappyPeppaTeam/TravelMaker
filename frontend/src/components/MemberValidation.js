const memberValidateField = (fieldName, value, passowrd, originalPassword) => {
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
      } else if (value !== originalPassword) {
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

  // function hashString(input) {
  //   let hash = 0;
  //   for (let i = 0; i < input.length; i++) {
  //     hash = (hash << 5) - hash + input.charCodeAt(i);
  //     hash = hash & hash; // 强制转换为 32 位整数
  //   }
  //   return hash;
  // }

  let valid = true;
  // alert([...userData.entries()].map(entry => entry.join(': ')).join('\n'));
  if (userData.hasOwnProperty("username") && !userData.get('username')) {
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (userData.hasOwnProperty("email") && !userData.get('email')) {
    valid = false;
  } else if (!emailPattern.test(userData.get('email'))) {
    alert(userData.get('email'));
    valid = false;
  }

  if (userData.hasOwnProperty("password") && !userData.get('password')) {
    valid = false;
  } else if (userData.hasOwnProperty("password") && userData.get('password').length < 6) {
    valid = false;
  }

  if (userData.hasOwnProperty("originalPassword") && !userData.get('originalPassword')) {
    valid = false;
  } else if (userData.hasOwnProperty("originalPassword") && userData.get('originalPassword').length < 6) {
    valid = false;
  }

  if (userData.hasOwnProperty("confirmPassword") && !userData.get('confirmPassword')) {
    valid = false;
  } else if (userData.hasOwnProperty("confirmPassword") && userData.get('confirmPassword') !== userData.get('password')) {
    valid = false;
  }

  if (userData.hasOwnProperty("fullName") && !userData.get('fullName')) {
    valid = false;
  }

  if (userData.hasOwnProperty("nickName") && !userData.get('nickName')) {
    valid = false;
  }

  if (userData.hasOwnProperty("birthday") && !userData.get('birthday')) {
    valid = false;
  }

  if (userData.hasOwnProperty("gender") && !userData.get('gender')) {
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
