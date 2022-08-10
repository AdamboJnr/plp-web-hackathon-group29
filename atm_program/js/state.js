const state = localStorage.getItem("atm-app-0123456789")
  ? JSON.parse(localStorage.getItem("atm-app-0123456789"))
  : {
      auth: {
        user: null,
      },
      account: {
        balance: 0,
        transactions: [],
      },
      users: [],
    };

// Check if the user is logged in
const isLoggedIn = () => {
  return state.auth.user !== null;
};

// Get the current user
const getUser = () => {
  return state.auth.user;
};
// Find user by id
const findUserById = (id) => {
  return state.users.find((user) => user.id === id);
};
// login a user
const loginUser = (id, password) => {
  const user = state.users.find((user) => user.id === id);
  if (!user) {
    alert("User not found");
    return;
  }
  if (user.password !== password) {
    alert("Invalid password");
    return;
  }
  state.auth.user = user;
  updateLocalStorage();
  return user;
};
// Get user account
const getUserAccount = () => {
  return state.account;
};

// logout the user
const logoutUser = () => {
  state.auth.user = null;
  updateLocalStorage();
};

// Get the current balance
const getBalance = () => {
  return state.account.balance;
};
// register a new user
const registerUser = (user) => {
  const existingUser = state.users.find(
    (currentUser) => currentUser.id === user.id
  );
  if (existingUser) {
    alert("User already exists");
    return;
  }
  const newUser = {
    ...user,
    accountNumber: new Date().getTime().toString().slice(-10),
  };
  state.users.push(newUser);
  updateLocalStorage();
};

// Get the current transactions

const getTransactions = () => {
  return state.account.transactions;
};
// update local storage
const updateLocalStorage = () => {
  localStorage.setItem("atm-app-0123456789", JSON.stringify(state));
};

// Add a new transaction
const addTransaction = (amount, type) => {
  state.account.transactions.push({
    amount,
    type,
    timestamp: Date.now(),
  });
  updateLocalStorage();
  return;
};

// Update the balance
const updateBalance = (amount, type) => {
  if (typeof amount !== "number") {
    alert("Please enter a valid amount");
    return;
  }

  if (type === "deposit") {
    state.account.balance += amount;
    updateLocalStorage();
    return;
  } else if (type === "withdraw") {
    if (amount > state.account.balance) {
      alert("Insufficient funds");
      return;
    }
    if (state.account.balance <= amount) {
      alert("You cannot withdraw all your money");
      return;
    }
    if (state.account.balance <= 500) {
      alert("You cannot withdraw beyond 500");
      return;
    }
    if (amount > state.account.balance) {
      alert("Insufficient funds");
      return;
    }
    state.account.balance -= amount;
    updateLocalStorage();
    return;
  }
};

// Save the state to local storage
const saveState = () => {
  localStorage.setItem("atm-app-0123456789", JSON.stringify(state));
};