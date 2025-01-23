const parent = document.getElementById("parentDiv");
parent.style.display = "flex";
parent.style.flexDirection = "column";
parent.style.justifyContent = "center";
parent.style.alignItems = "center";
parent.style.height = "100vh";

// Create and style the "Log In" heading
const p_tag = document.createElement("p");
p_tag.innerHTML = "Sign Up";
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

// First Name
const firstNameLabel = document.createElement("div");
firstNameLabel.innerHTML = "First Name";
firstNameLabel.style.color = "#b6ade9";
firstNameLabel.style.fontSize = "20px";
firstNameLabel.style.marginBottom = "5px";
formContainer.appendChild(firstNameLabel);

const firstNameInput = document.createElement("input");
firstNameInput.placeholder = "Enter your first name";
firstNameInput.style.width = "100%";
firstNameInput.style.height = "30px";
firstNameInput.style.padding = "0 10px";
firstNameInput.style.marginBottom = "15px";
firstNameInput.style.border = "1px solid #ccc";
firstNameInput.style.borderRadius = "5px";
formContainer.appendChild(firstNameInput);

// Last Name
const lastNameLabel = document.createElement("div");
lastNameLabel.innerHTML = "Last Name";
lastNameLabel.style.color = "#b6ade9";
lastNameLabel.style.fontSize = "20px";
lastNameLabel.style.marginBottom = "5px";
formContainer.appendChild(lastNameLabel);

const lastNameInput = document.createElement("input");
lastNameInput.placeholder = "Enter your last name";
lastNameInput.style.width = "100%";
lastNameInput.style.height = "30px";
lastNameInput.style.padding = "0 10px";
lastNameInput.style.marginBottom = "15px";
lastNameInput.style.border = "1px solid #ccc";
lastNameInput.style.borderRadius = "5px";
formContainer.appendChild(lastNameInput);

// Age
const ageLabel = document.createElement("div");
ageLabel.innerHTML = "Age";
ageLabel.style.color = "#b6ade9";
ageLabel.style.fontSize = "20px";
ageLabel.style.marginBottom = "5px";
formContainer.appendChild(ageLabel);

const ageInput = document.createElement("input");
ageInput.placeholder = "Enter your age";
ageInput.type = "number";
ageInput.style.width = "100%";
ageInput.style.height = "30px";
ageInput.style.padding = "0 10px";
ageInput.style.marginBottom = "15px";
ageInput.style.border = "1px solid #ccc";
ageInput.style.borderRadius = "5px";
formContainer.appendChild(ageInput);

// Birthday
const birthdayLabel = document.createElement("div");
birthdayLabel.innerHTML = "Birthday";
birthdayLabel.style.color = "#b6ade9";
birthdayLabel.style.fontSize = "20px";
birthdayLabel.style.marginBottom = "5px";
formContainer.appendChild(birthdayLabel);

const birthdayInput = document.createElement("input");
birthdayInput.placeholder = "Enter your birthday";
birthdayInput.type = "date";
birthdayInput.style.width = "100%";
birthdayInput.style.height = "30px";
birthdayInput.style.padding = "0 10px";
birthdayInput.style.marginBottom = "15px";
birthdayInput.style.border = "1px solid #ccc";
birthdayInput.style.borderRadius = "5px";
formContainer.appendChild(birthdayInput);

// Gender
const genderLabel = document.createElement("div");
genderLabel.innerHTML = "Gender";
genderLabel.style.color = "#b6ade9";
genderLabel.style.fontSize = "20px";
genderLabel.style.marginBottom = "5px";
formContainer.appendChild(genderLabel);

const genderSelect = document.createElement("select");


const maleOption = document.createElement("option");
maleOption.value = "male";
maleOption.innerHTML = "Male";


const femaleOption = document.createElement("option");
femaleOption.value = "female";
femaleOption.innerHTML = "Female";


const otherOption = document.createElement("option");
otherOption.value = "other";
otherOption.innerHTML = "Other";


genderSelect.appendChild(maleOption);
genderSelect.appendChild(femaleOption);
genderSelect.appendChild(otherOption);
genderSelect.style.marginBottom = "15px";
formContainer.appendChild(genderSelect);

// Relationship Status
const relationshipLabel = document.createElement("div");
relationshipLabel.innerHTML = "Relationship Status";
relationshipLabel.style.color = "#b6ade9";
relationshipLabel.style.fontSize = "20px";
relationshipLabel.style.marginBottom = "5px";
formContainer.appendChild(relationshipLabel);

const relationshipSelect = document.createElement("select");
const singleOption = document.createElement("option");
singleOption.value = "single";
singleOption.innerHTML = "Single";


const inRelationshipOption = document.createElement("option");
inRelationshipOption.value = "inRelationship";
inRelationshipOption.innerHTML = "In a Relationship";


const marriedOption = document.createElement("option");
marriedOption.value = "married";
marriedOption.innerHTML = "Married";


relationshipSelect.appendChild(singleOption);
relationshipSelect.appendChild(inRelationshipOption);
relationshipSelect.appendChild(marriedOption);
relationshipSelect.style.marginBottom = "15px";
formContainer.appendChild(relationshipSelect);

// Username
const usernameLabel = document.createElement("div");
usernameLabel.innerHTML = "Username";
usernameLabel.style.color = "#b6ade9";
usernameLabel.style.fontSize = "20px";
usernameLabel.style.marginBottom = "5px";
formContainer.appendChild(usernameLabel);

const usernameInput = document.createElement("input");
usernameInput.placeholder = "Enter your username";
usernameInput.style.width = "100%";
usernameInput.style.height = "30px";
usernameInput.style.padding = "0 10px";
usernameInput.style.marginBottom = "15px";
usernameInput.style.border = "1px solid #ccc";
usernameInput.style.borderRadius = "5px";
formContainer.appendChild(usernameInput);

// Password
const passwordLabel = document.createElement("div");
passwordLabel.innerHTML = "Password";
passwordLabel.style.color = "#b6ade9";
passwordLabel.style.fontSize = "20px";
passwordLabel.style.marginBottom = "5px";
formContainer.appendChild(passwordLabel);

const passwordInput = document.createElement("input");
passwordInput.placeholder = "Enter your password";
passwordInput.type = "password";
passwordInput.style.width = "100%";
passwordInput.style.height = "30px";
passwordInput.style.padding = "0 10px";
passwordInput.style.marginBottom = "15px";
passwordInput.style.border = "1px solid #ccc";
passwordInput.style.borderRadius = "5px";
formContainer.appendChild(passwordInput);

// Error messages
const fail = document.createElement("div");
fail.innerHTML = "Please enter a valid first name (letters only)";
fail.style.color = "red";
fail.style.fontSize = "14px";
fail.style.display = "none";
fail.style.marginBottom = "15px";
formContainer.appendChild(fail);

const fail2 = document.createElement("div");
fail2.innerHTML = "Please enter a valid last name (letters only)";
fail2.style.color = "red";
fail2.style.fontSize = "14px";
fail2.style.display = "none";
fail2.style.marginBottom = "15px";
formContainer.appendChild(fail2);

const fail3 = document.createElement("div");
fail3.innerHTML = "Please enter a valid age (positive number)";
fail3.style.color = "red";
fail3.style.fontSize = "14px";
fail3.style.display = "none";
fail3.style.marginBottom = "15px";
formContainer.appendChild(fail3);

const fail4 = document.createElement("div");
fail4.innerHTML = "Please enter a valid username (letters and numbers only)";
fail4.style.color = "red";
fail4.style.fontSize = "14px";
fail4.style.display = "none";
fail4.style.marginBottom = "15px";
formContainer.appendChild(fail4);

const fail5 = document.createElement("div");
fail5.innerHTML = "Password must be at least 6 characters";
fail5.style.color = "red";
fail5.style.fontSize = "14px";
fail5.style.display = "none";
fail5.style.marginBottom = "15px";
formContainer.appendChild(fail5);

// "Sign Up" Button
const submitButton = document.createElement("button");
submitButton.innerHTML = "Sign Up";
submitButton.style.borderRadius = "15px";
submitButton.style.backgroundColor = "#009688";
submitButton.style.color = "white";
submitButton.style.height = "40px";
submitButton.style.width = "150px";
submitButton.style.fontSize = "18px";
submitButton.style.fontWeight = "bold";
submitButton.style.border = "none";
submitButton.style.transition = "background-color 0.3s";
formContainer.appendChild(submitButton);

// Button Hover Effect
submitButton.addEventListener("mouseover", () => {
  submitButton.style.backgroundColor = "#00796b";
});
submitButton.addEventListener("mouseout", () => {
  submitButton.style.backgroundColor = "#009688"; // Reset to original color
});

function validateForm() {
  const firstNameValue = firstNameInput.value.trim();
  const lastNameValue = lastNameInput.value.trim();
  const ageValue = ageInput.value.trim();
  const birthdayValue = birthdayInput.value.trim();
  const genderValue = genderSelect.value;
  const relationshipValue = relationshipSelect.value;
  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // Validate first and last names (letters only)
  const firstNameIsValid = /^[A-Za-z]+$/.test(firstNameValue);
  const lastNameIsValid = /^[A-Za-z]+$/.test(lastNameValue);

  // Validate age (positive number)
  const ageIsValid = !isNaN(ageValue) && ageValue > 0;

  // Validate username (alphanumeric)
  const usernameIsValid = /^[A-Za-z0-9]+$/.test(usernameValue);

  // Validate password (minimum length)
  const passwordIsValid = passwordValue.length >= 6;

  // Show or hide error messages
  fail.style.display = firstNameIsValid ? "none" : "block";
  fail2.style.display = lastNameIsValid ? "none" : "block";
  fail3.style.display = ageIsValid ? "none" : "block";
  fail4.style.display = usernameIsValid ? "none" : "block";
  fail5.style.display = passwordIsValid ? "none" : "block";

  return firstNameIsValid && lastNameIsValid && ageIsValid && usernameIsValid && passwordIsValid;
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const isValid = validateForm();

  if (isValid) {
    alert("Sign Up Successful!");
  } else {
    alert("Please fill in the fields correctly.");
  }
});
