document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // 🔐 Basic hardcoded login (can be replaced with backend later)
  if (username === "admin" && password === "smart123") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html"; // redirect to dashboard
  } else {
    document.getElementById("loginError").textContent = "Invalid credentials.";
  }
});
