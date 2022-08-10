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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayName = new Date("Aug 15 2022,11:30:59").getDay();
let dayDate = new Date("Aug 15 2022,11:30:59").getDate();
let monthName = new Date("Aug 15 2022,11:30:59").getMonth();
let year = new Date("Aug 15 2022,11:30:59").getFullYear();
let hour = new Date("Aug 15 2022,11:30:59").getHours();
let minutes = new Date("Aug 15 2022,11:30:59").getMinutes();
let deadline = document.querySelector("#end-day");
deadline.innerHTML = `Give Away Ends On : ${weekdays[dayName]}, ${dayDate},${months[monthName]}, ${year} at: ${hour}:${minutes}Am`;
let timeInt = setInterval(() => {
  //using getTime() to get the time in ms from 1970 till now.
  let dateNow = new Date().getTime();

  //using getTime() to get the time in ms from 1970 till Aug 15 2022.
  let giveAwayEnd = new Date("Aug 15 2022,11:30:59").getTime();
  let theDiffrence = giveAwayEnd - dateNow;
  let days = Math.floor(theDiffrence / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (theDiffrence % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60
  );
  let mins = Math.floor((theDiffrence % (1000 * 60 * 60)) / 1000 / 60);
  let secs = Math.floor((theDiffrence % (1000 * 60)) / 1000);

  let daysDiv = document.querySelector("#days h3:nth-child(1)");
  daysDiv.innerHTML = days < 10 ? `0${days}` : days;
  let hoursDiv = document.querySelector("#hours h3:nth-child(1)");
  hoursDiv.innerHTML = hours < 10 ? `0${hours}` : hours;
  let minsDiv = document.querySelector("#minutes h3:nth-child(1)");
  minsDiv.innerHTML = mins < 10 ? `0${mins}` : mins;
  let secsDiv = document.querySelector("#seconds h3:nth-child(1)");
  secsDiv.innerHTML = secs < 10 ? `0${secs}` : secs;
  if (theDiffrence < 0) {
    clearInterval(timeInt);
  }
}, 1000);
