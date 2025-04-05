export const validateEmail = (value: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(value);
};

export const validatePassword = (password: string): boolean => {
    const minLength = 6;
    const hasNumber = /[0-9]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);

    if (!password || password.length < minLength || !hasNumber || !hasUppercase) {
        return false;
    }

    return true;
};

export const validateEmailField = (email: string): string => {
    if (!email || !validateEmail(email)) {
        return "Введите корректный email";
    }
    return "";
};

export const validatePasswordField = (password: string): string => {
    if (!password || !validatePassword(password)) {
        return "Пароль должен быть не менее 6 символов, содержать цифры и заглавные буквы";
    }
    return "";
};

export const validatePasswordsMatch = (password: string, confirmPassword: string): string => {
    if (!confirmPassword) return "Подтвердите пароль";
    if (password !== confirmPassword) return "Пароли не совпадают";
    return "";
  };