let userInput = document.getElementById("dob");
let DateBox = document.getElementById("Date");

userInput.max = new Date().toISOString().split("T")[0];

const calculateAge = () => {
  let birthDate = new Date(userInput.value);
  let currentDate = new Date();

  let ageInMilliseconds = currentDate - birthDate;
  let ageInYears = Math.floor(
    ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
  );
  let ageInMonths =
    Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.4375)) % 12;
  let ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24)) % 30;

  DateBox.innerHTML = `
    <div class="DateBox"><div class="top">${ageInDays}<div class="bottom">Days</div></div></div>
    <div class="DateBox"><div class="top">${ageInMonths}<div class="bottom">Months</div></div></div>
    <div class="DateBox"><div class="top">${ageInYears}<div class="bottom">Years</div></div></div>
  `;
};
userInput.addEventListener("input", calculateAge);
