function validateEmail() {
  const email = document.getElementById("email").value;
  const error = document.getElementById("error");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
}
