const loginForm = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {};

  formData.forEach((value, name) => {
    data[name] = value;
  });

  if (data.email === "" || data.password === "") {
    alert("Please fill in all fields");
  } else {
    console.log(data);
    loginForm.reset();
  }
}

loginForm.addEventListener("submit", handleSubmit);
