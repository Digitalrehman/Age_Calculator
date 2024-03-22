let userInput = document.getElementById("dob");
let DateBox = document.getElementById("Date");

// Set maximum date for input as today's date
userInput.max = new Date().toISOString().split("T")[0];

const calculateAge = () => {
  // Parse the birth date from the input field
  let birthDate = new Date(userInput.value);
  let currentDate = new Date();

  // Calculate the difference in years, months, and days
  let ageInMilliseconds = currentDate - birthDate;
  let ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
  let ageInMonths = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.4375)) % 12;
  let ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24)) % 30;

  // Update the HTML to display the calculated age
  DateBox.innerHTML = `
    <div class="DateBox"><div class="top">${ageInDays}<div class="bottom">Days</div></div></div>
    <div class="DateBox"><div class="top">${ageInMonths}<div class="bottom">Months</div></div></div>
    <div class="DateBox"><div class="top">${ageInYears}<div class="bottom">Years</div></div></div>
  `;
};

// Call the calculateAge function whenever the date of birth input changes
userInput.addEventListener("input", calculateAge);
