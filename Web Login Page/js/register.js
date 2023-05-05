
const registerForm = document.forms["myform2"];
const usernameInput = registerForm["uname1"];
const emailInput = registerForm["email"];
const passwordInput = registerForm["upswd1"];
const retypePasswordInput = registerForm["upswd2"];

registerForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (usernameInput.value === "") {
    alert("Username cannot be empty");
    return false;
  }

  if (emailInput.value === "") {
    alert("Email cannot be empty");
    return false;
  }

  if (passwordInput.value === "") {
    alert("Password cannot be empty");
    return false;
  }

  if (retypePasswordInput.value === "") {
    alert("Please retype password");
    return false;
  }

  if (passwordInput.value !== retypePasswordInput.value) {
    alert("Passwords do not match");
    return false;
  }


  registerForm.submit();
});
