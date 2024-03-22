let userInput = document.getElementById("dob");
let DateBox = document.getElementById("Date");
userInput.max = new Date().toISOString().split("T")[0];

const calculateAge = () => {
  let birth_Date = new Date(userInput.value);

  let date = birth_Date.getDate();
  let month = birth_Date.getMonth() + 1;
  let year = birth_Date.getFullYear();

  let TodayDate = new Date();

  let todayDate = TodayDate.getDate();
  let todayMonth = TodayDate.getMonth() + 1;
  let todayYear = TodayDate.getFullYear();

  let dateCalculation, monthCalculation, YearCalculation;
  YearCalculation = todayYear - year;
  if (todayMonth >= month) {
    monthCalculation = todayMonth - month;
  } else {
    YearCalculation--;
    monthCalculation = 12 + todayMonth - month;
  }

  if (todayDate >= date) {
    dateCalculation = todayDate - date;
  } else {
    monthCalculation--;
    dateCalculation = getDaysInMonth(year, month) + todayDate - date;
  }

  if (monthCalculation < 0) {
    monthCalculation = 11;
    YearCalculation--;
  }
  DateBox.innerHTML = `

<div class="DateBox"><div class="top">${dateCalculation}<div class="bottom">Year</div></div></div>
<div class="DateBox"><div class="top">${monthCalculation}<div class="bottom">Month</div></div></div>
<div class="DateBox"><div class="top">${YearCalculation}<div class="bottom">Date</div></div></div>
`;
  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
};
