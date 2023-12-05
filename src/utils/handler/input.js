export const nameHandler = (value, errState) => {
  if (value.trim() === "") {
    errState((prevState) => ({
      ...prevState,
      name: "Nama tidak boleh kosong",
    }));
  } else if (value.length < 4) {
    errState((prevState) => ({
      ...prevState,
      name: "Username Minimal 4 Karakter",
    }));
  } else if (value.match(/[^a-zA-Z0-9]/g)) {
    errState((prevState) => ({
      ...prevState,
      name: "Username Tidak Boleh Mengandung Karakter Spesial",
    }));
  } else {
    errState((prevState) => ({
      ...prevState,
      name: "",
    }));
  }
};

export const emailHandler = (value, errState) => {
  if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    errState((prevState) => ({
      ...prevState,
      email: "Pastikan menggunakan alamat email bisnis anda untuk masuk ke dalam sistem kami",
    }));
  } else {
    errState((prevState) => ({
      ...prevState,
      email: "",
    }));
  }
};

export const passwordHandler = (value, errState) => {
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasDigit = /\d/.test(value);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

  if (value.length < 8) {
    errState((prevState) => ({
      ...prevState,
      password: "Password harus terdiri dari minimal 8 karakter dengan kombinasi huruf besar, huruf kecil, angka, dan karakter khusus",
    }));
  } else if (!(hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar)) {
    errState((prevState) => ({
      ...prevState,
      password: "Password harus terdiri dari minimal 8 karakter dengan kombinasi huruf besar, huruf kecil, angka, dan karakter khusus",
    }));
  } else {
    errState((prevState) => ({
      ...prevState,
      password: "",
    }));
  }
};

export const confirmPasswordHandler = (value, errState, password) => {
  if (value !== password) {
    errState((prevState) => ({
      ...prevState,
      confirmPassword: "Password Tidak Sama",
    }));
  } else {
    errState((prevState) => ({
      ...prevState,
      confirmPassword: "",
    }));
  }
};

export const nameChecker = (value) => {
  return !value.match(/[^a-zA-Z0-9]/g);
};

export const emailChecker = (value) => {
  return value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};

export const passwordChecker = (value) => {
  return value.length >= 8;
};
