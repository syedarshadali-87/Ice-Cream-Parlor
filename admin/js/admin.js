
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = this.querySelector('input[type="text"]').value;
  const password = this.querySelector('input[type="password"]').value;
  if(username === "admin" && password === "1234") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials!");
  }
});
