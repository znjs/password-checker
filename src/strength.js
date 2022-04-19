const strengthCheck = (password) => {
  let strength = 0;
  let upperCaseCount = 0;
  let lowerCaseCount = 0;
  let numberCount = 0;
  let specialCharCount = 0;
  if (password.length > 3 && password.length < 32) {
    for (let i in password) {
      let charCode = password[i].charCodeAt(0);
      switch (true) {
        case charCode >= 97 && charCode <= 122:
          lowerCaseCount++;
          break;
        case charCode >= 65 && charCode <= 90:
          upperCaseCount++;
          break;
        case charCode >= 48 && charCode <= 57:
          numberCount++;
          break;
        case (charCode > 33 && charCode <= 47) ||
          (charCode >= 58 && charCode <= 64) ||
          (charCode >= 91 && charCode <= 96) ||
          (charCode >= 123 && charCode <= 126):
          specialCharCount++;
          break;
        default:
          break;
      }
    }
  }
  if (specialCharCount) strength++;
  if (lowerCaseCount) strength++;
  if (upperCaseCount) strength++;
  if (numberCount) strength++;
  if (specialCharCount > 2) strength += 2;
  if (lowerCaseCount > 2) strength += 2;
  if (upperCaseCount > 2) strength += 2;
  return strength > 10 ? 100 : strength * 10;
};

export { strengthCheck };

// ?CHAR CODES
/**
 * a - 97
 * A - 65
 * z - 122
 * Z - 90
 * 0 - 48
 * 9 - 57
 * special Chars - 33-47/58-64/91-96/123-126
 */
