{
  /* <div class="calendar-container">
<p class="month-name" id="month-name">April</p>
<p class="day-name" id="day-name">Friday</p>
<p class="day-number" id="day-number">20</p>
<p class="year" id="year">2020</p>
</div> */
}

const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const yearName = document.getElementById("year");

const month = new Date().getMonth();
const day = new Date().getDay();
const date = new Date().getDate();
const year = new Date().getFullYear();

console.log(year);
console.log(date);
console.log(day);

const months = [
  "Januray",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

monthName.innerHTML = months[month];
dayName.innerHTML = days[day];
dayNumber.innerHTML = date;
yearName.innerHTML = year;
