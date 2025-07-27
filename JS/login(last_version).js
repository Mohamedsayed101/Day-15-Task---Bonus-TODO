// ==== Switch Between Login and Register ====
document.querySelectorAll(".swap").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("loginBox").classList.toggle("d-none");
    document.getElementById("registerBox").classList.toggle("d-none");
  });
});

// ==== Show Message in Message Box ====
function showMessage(id, text, type) {
  const msgBox = document.getElementById(id);
  msgBox.textContent = text;
  msgBox.className = `message-box ${type}`;
  msgBox.style.display = "block";
}

// ==== Register Form Logic ====
document.getElementById("regBtn").addEventListener("click", function (e) {
  e.preventDefault();

  let messageId = "registerMessage";

  const userName = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const confirmPassword = document.getElementById("regConfirmPassword").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const strongPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/;

  if (!userName || !email || !password || !confirmPassword) {
    showMessage(messageId, "Please fill in all fields.", "error");
    return;
  }

  if (!emailRegex.test(email)) {
    showMessage(messageId, "Invalid email format.", "error");
    return;
  }

  if (!strongPassword.test(password)) {
    showMessage(
      messageId,
      "Password must be at least 6 characters with numbers.",
      "error"
    );
    return;
  }

  if (password !== confirmPassword) {
    showMessage(messageId, "Passwords do not match.", "error");
    return;
  }

  const user = { userName, email, password };
  localStorage.setItem("userData", JSON.stringify(user));

  showMessage(messageId, "Registered successfully ", "success");

  // Switch to login form
  setTimeout(() => {
    document.getElementById("loginBox").classList.remove("d-none");
    document.getElementById("registerBox").classList.add("d-none");
    document.getElementById(messageId).style.display = "none";
  }, 1500);
});

// ==== Login Form Logic ====
document.getElementById("logBtn").addEventListener("click", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const messageId = "loginMessage";

  if (!email || !password) {
    showMessage(messageId, "Please enter email and password.", "error");
    return;
  }

  if (!emailRegex.test(email)) {
    showMessage(messageId, "Invalid email format.", "error");
    return;
  }

  if (password.length < 6) {
    showMessage(messageId, "Password must be at least 6 characters.", "error");
    return;
  }

  const userData = JSON.parse(localStorage.getItem("userData"));

  if (!userData) {
    showMessage(messageId, "No account found. Please register first.", "error");
    return;
  }

  if (userData.email === email && userData.password === password) {
    showMessage(messageId, `Welcome back, ${userData.userName.split(" ").at(0)}! `, "success");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  } else {
    showMessage(messageId, "Incorrect email or password.", "error");
  }
});
