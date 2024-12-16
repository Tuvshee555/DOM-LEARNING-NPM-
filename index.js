const parent = document.getElementById("parentDiv");
parent.style.display = "flex";
parent.style.flexDirection = "column";
parent.style.justifyContent = "center";
parent.style.alignItems = "center";
parent.style.height = "100vh";

const p_tag = document.createElement("p");
p_tag.innerHTML = "Log In";
p_tag.style.color = "black";
p_tag.style.fontSize = "50px";
p_tag.style.display = "flex";
p_tag.style.justifyContent = "center";
parent.appendChild(p_tag);

const formContainer = document.createElement("div");
formContainer.style.width = "600px";
formContainer.style.display = "flex";
formContainer.style.flexDirection = "column";
formContainer.style.justifyContent = "space-between";
parent.appendChild(formContainer);

// Create and style the email label
const email = document.createElement("div");
email.innerHTML = "Email";
email.style.color = "#b6ade9";
email.style.fontSize = "20px";
email.style.marginBottom = "5px";
formContainer.appendChild(email);

// Create and style the email input element
const input = document.createElement("input");
input.placeholder = "Enter your email";
input.style.width = "100%";
input.style.height = "30px";
input.style.padding = "0 10px";
input.style.marginBottom = "15px";
input.style.border = "1px solid #ccc";
input.style.borderRadius = "5px";
formContainer.appendChild(input);

// Create and style the error message for email
const fail = document.createElement("div");
fail.innerHTML = "Please enter a valid email";
fail.style.color = "red";
fail.style.fontSize = "14px";
fail.style.display = "none";
fail.style.marginBottom = "15px";
formContainer.appendChild(fail);

// Create and style the password label
const email2 = document.createElement("div");
email2.innerHTML = "Password";
email2.style.color = "#b6ade9";
email2.style.fontSize = "20px";
email2.style.marginBottom = "5px"; // Space between label and input
formContainer.appendChild(email2);

// Create and style the password input element
const input2 = document.createElement("input");
input2.placeholder = "Enter your password";
input2.style.width = "100%";
input2.style.height = "30px";
input2.style.padding = "0 10px";
input2.style.marginBottom = "15px";
input2.style.border = "1px solid #ccc";
input2.style.borderRadius = "5px";
formContainer.appendChild(input2);

// Create and style the error message for password
const fail2 = document.createElement("div");
fail2.innerHTML = "Please enter a valid password";
fail2.style.color = "red";
fail2.style.fontSize = "14px";
fail2.style.display = "none";
fail2.style.marginBottom = "15px";
formContainer.appendChild(fail2);

// Create and style the "Log In" button
const circle = document.createElement("button");
circle.innerHTML = "Log In";
circle.style.borderRadius = "15px";
circle.style.backgroundColor = "#009688";
circle.style.color = "white";
circle.style.height = "40px";
circle.style.width = "150px";
circle.style.fontSize = "18px";
circle.style.fontWeight = "bold";
circle.style.border = "none";
circle.style.transition = "background-color 0.3s";
formContainer.appendChild(circle);

//hover
circle.addEventListener("mouseover", () => {
  circle.style.backgroundColor = "#00796b";
});
circle.addEventListener("mouseout", () => {
  circle.style.backgroundColor = "#009688"; // Reset to original color
});



function validateForm() {
  const emailValue = input.value.trim();
  const passwordValue = input2.value.trim();

  // Validate email (basic pattern check)
  const emailIsValid = emailValue.includes('@') && emailValue.includes('.') && !emailValue.includes(' ');
  const passwordIsValid = passwordValue.length >= 6;
  if (!emailIsValid) {
    fail.style.display = "block";
  } else {
    fail.style.display = "none";
  }

  if (!passwordIsValid) {
    fail2.style.display = "block";
  } else {
    fail2.style.display = "none";
  }
  return emailIsValid && passwordIsValid;
}

circle.addEventListener("click", (event) => {
  event.preventDefault();
  const isValid = validateForm();

  if (isValid) {
    alert("Login Successful!");
  } else {
    alert("Please fill in the fields correctly.");
  }
});
