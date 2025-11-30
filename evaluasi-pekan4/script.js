// Toggle login/register
const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
  logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
  logregBox.classList.remove('active');
});

// Ambil elemen form
const loginForm = document.querySelector(".form-box.login form");
const registerForm = document.querySelector(".form-box.register form");

// Event Register
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = registerForm.querySelector("input[type='text']").value;
  const email = registerForm.querySelector("input[type='email']").value;
  const password = registerForm.querySelector("input[type='password']").value;

  // Simpan ke localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Registrasi berhasil! Data tersimpan.");
  registerForm.reset();

  // Setelah register, otomatis balik ke login form
  logregBox.classList.remove('active');
});

// Event Login
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = loginForm.querySelector("input[type='email']").value;
  const password = loginForm.querySelector("input[type='password']").value;

  const storedEmail = localStorage.getItem("email");
  const storedPass = localStorage.getItem("password");

  if (email === storedEmail && password === storedPass) {
    alert("Login berhasil! Selamat datang ☕");
    // contoh redirect ke dashboard.html
    // window.location.href = "dashboard.html";
  } else {
    alert("Login gagal! Email atau password salah.");
  }

  loginForm.reset();
});
