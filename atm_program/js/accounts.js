const accountTabs = {
  login: {
    title: "Login",
  },
  register: {
    title: "Register",
  },
};

let currentTab = "login";
// login and register container
const accountContainer = document.querySelector(".account-container");
const logoutBtn = document.querySelector(".logout-btn");
const loginContainer = document.querySelector(".login-container");
const registerContainer = document.querySelector(".register-container");
const appUsername = document.querySelector(".app-username");
const appBalance = document.querySelector(".app-balance");
const appTransactions = document.querySelector(".app-transactions");
const appUserId = document.querySelector(".app-id");
const accountNumber = document.querySelector(".app-account-number");
window.addEventListener("load", (e) => {
  // check current state
  if (isLoggedIn()) {
    console.log("logged in");
    // Show app container and hide login/register container
    accountContainer.style.display = "none";
    appContainer.style.display = "block";
    // Show user info
    appUsername.textContent = `Name: ${getUser().firstName} ${getUser().lastName}`;
    appUserId.textContent = `Id number: ${getUser().id}`;
    appBalance.textContent = `Balance: ${getBalance()}`;
    accountNumber.textContent = `Account number: ${getUser().accountNumber}`;
    
  } else {
    appContainer.style.display = "none";
    accountContainer.style.display = "block";
    if (currentTab === "login") {
      loginContainer.style.display = "block";
      registerContainer.style.display = "none";
    }
  }
});
// App container
const appContainer = document.querySelector(".app-container");
// login and register form
const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");

// account tab switch buttons
const loginTabBtn = document.querySelector(".account-tab-login");
const registerTabBtn = document.querySelector(".account-tab-register");

// account tab switch buttons event listeners
loginTabBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  currentTab = "login";
  loginContainer.style.display = "block";
  registerContainer.style.display = "none";
});

registerTabBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  currentTab = "register";
  loginContainer.style.display = "none";
  registerContainer.style.display = "block";
});

// login form event listener
loginForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const id = formData.get("id");
  const password = formData.get("password");
  if (!id || !password) {
    alert("Id number and password should be provided");
    return;
  }
  loginUser(id, password);
  window.location.reload();
});

// register form event listener
registerForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  const terms = formData.get("terms");
  const id = formData.get("id");
  if (!id) {
    alert("ID should be provided");
    return;
  }
  if (id.length !== 8) {
    alert("ID should be 8 characters in length");
    return;
  }
  if (!Number(id)) {
    alert("ID should be a number");
    return;
  }
  if (password.length !== 4) {
    alert("Password should be 4 characters in length");
    return;
  }
  if (!firstName) {
    alert("First name should be provided");
    return;
  }
  if (!lastName) {
    alert("Last name should be provided");
    return;
  }

  if (!password) {
    alert("Password should be provided");
    return;
  }
  if (!/[0-9]{4}/.test(password)) {
    alert("Password should be at 4 numbers in length");
    return;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  if (!terms) {
    alert("Please accept the terms and conditions");
    return;
  }

  // register user
  const user = {
    id,
    firstName,
    lastName,
    password,
  };
  registerUser(user);
  loginUser(id, password);
  window.location.reload();
  // Show app container and hide login/register container
});
// logout user
logoutBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  logoutUser();
  window.location.reload();
});
