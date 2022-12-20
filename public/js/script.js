header('Content-Type: application-javascript')

import calendar from 'calendar';

// Call the Date object of javascript to get date time, etc.
const date = new Date();
//check in the console... lol
// console.log(date)



const renderCalendar = () => {
    date.setDate(1);
  
    const monthDays = document.querySelector(".days");
  
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
  
    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();
  
    const firstDayIndex = date.getDay();
  
    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();
  
    const nextDays = 7 - lastDayIndex - 1;
// Use Date.getMonth to get current month index in a 0 base index of the year. 
const month = date.getMonth();
// Turn that into an array of the year, that includes all the months.


  const months = [
    "January",
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

// Set up a function to control the month prev - next arrows??? 
// Html approach. changed in the EJS. 

// Get the month title of the calendar and name it the month that it currently is. 
  // document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  // And get the date by selecting the p and change into the current date as a String. 
  // document.querySelector(".date p").innerHTML = new Date().toDateString();

//   let days = "";

//   for (let x = firstDayIndex; x > 0; x--) {
//     days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
//   }

//   for (let i = 1; i <= lastDay; i++) {
//     if (
//       i === new Date().getDate() &&
//       date.getMonth() === new Date().getMonth()
//     ) {
//       days += `<div class="today">${i}</div>`;
//     } else {
//       days += `<div>${i}</div>`;
//     }
//   }

//   for (let j = 1; j <= nextDays; j++) {
//     days += `<div class="next-date">${j}</div>`;
//     monthDays.innerHTML = days;
//   }
// };

// document.querySelector(".prev").addEventListener("click", () => {
//   date.setMonth(date.getMonth() - 1);
//   renderCalendar();
// });

function nextMonth(){
document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
}


renderCalendar();
}