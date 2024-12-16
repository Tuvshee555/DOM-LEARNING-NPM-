// // 4
// let parentDiv = document.getElementById('parentDiv');
// let newParagraph = document.createElement('p');
// newParagraph.innerHTML = "This is a new paragraph!";
// parentDiv.appendChild(newParagraph); // Append the new p tag to the parent div

// // 5. Replace the div tag with the new p tag
// let newDiv = document.createElement('p'); // Create a new p tag
// newDiv.innerHTML = "The div has been replaced with this paragraph!";
// parentDiv.innerHTML = ''; // Clear the content of parentDiv
// parentDiv.appendChild(newDiv); // Append the new p tag to parentDiv

// // 6. Create a p tag that functions as a button and append to parent div
// let button = document.createElement('p');
// button.innerHTML = "Click Me!"; // Give it some text
// button.style.cursor = 'pointer'; // Make it look like a button with cursor pointer
// parentDiv.appendChild(button); // Append it to parent div

// // 7. Add style attribute to the button element
// button.style.padding = '10px 20px'; // Add padding to the button
// button.style.backgroundColor = 'lightblue'; // Add background color
// button.style.textAlign = 'center'; // Center align the text
// button.style.border = '1px solid #000'; // Add a border

// // 8. Show alert when the button is clicked
// button.addEventListener('click', function() {
//     alert("Button was clicked!");
// });

// // 9. Create a p tag that contains "Hello world title" and change color on mouseover
// let helloParagraph = document.createElement('p');
// helloParagraph.innerHTML = "Hello world title"; // Add text content
// helloParagraph.style.fontSize = '20px'; // Increase font size for visibility
// parentDiv.appendChild(helloParagraph); // Append it to parent div

// // Change color on mouseover
// helloParagraph.addEventListener('mouseover', function() {
//     helloParagraph.style.color = 'red'; // Change color to red
// });
// helloParagraph.addEventListener('mouseout', function() {
//     helloParagraph.style.color = ''; // Reset the color when the mouse moves out
// });

// // 10. Add a class name using classList
// helloParagraph.classList.add('hello-class'); // Add a class to the paragraph




// Exercise
// 1. Create folder DOM_lesson
// 2. index.html , index.js
// 3. index.html  1 shirheg div, script tag-tai
// 4. create new P tag and give innerHTML context and append parent DIV with it.
// 5. Use replace it with div tag
// 6. Create button using p tag and append parent
// 7. Add style attribute in button element button
// 8. Show alert when button clicked by using event listener
// 9. Create p tag that contains "Hello wolrd title" and change the color when element mouseover
// 10. Add class name using classList