export function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export function isValidPassword(password) {
  return typeof password === 'string' && password.length >= 8;
}

export function isNotEmpty(value) {
  return value !== null && value !== undefined && String(value).trim().length > 0;
}
