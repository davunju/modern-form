const id = (id) => document.getElementById(id);

const username = id("name"),
  email = id("email"),
  password = id("password"),
  button = id("btn");

const checkInput = (input, message) => {
  const field = input.parentElement;
  const selector = (selector) => field.querySelector(selector);
  const errorMsg = selector("small"),
    errorIcon = selector("#error-icon"),
    successIcon = selector("#success-icon");
  if (input.value.trim() === "") {
    errorMsg.textContent = message;
    errorIcon.style.opacity = 1;
    successIcon.style.opacity = 0;
  } else {
    errorMsg.textContent = "";
    errorIcon.style.opacity = 0;
    successIcon.style.opacity = 1;
  }
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  checkInput(username, "Username can't be blank");
  checkInput(email, "Email can't be blank");
  checkInput(password, "Password can't be blank");
});
