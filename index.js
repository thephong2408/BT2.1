const hourTime = document.querySelector(".hour_time");
const dateElement = document.querySelector(".date");
const tbody = document.querySelector(".tbody");
const month_year = document.querySelector(".month_year");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const ampm = document.querySelector(".ampm");
const table = document.querySelector(".div_table");
const table1 = document.querySelector(".div_table1");
const table2 = document.querySelector(".div_table2");
const year2 = document.querySelector(".month_year2");
const btn12 = document.querySelector(".btn12");
const btn23 = document.querySelector(".btn23");
const tbody2 = document.querySelector(".tbody2");
const year1 = document.querySelector(".month_year1");
const btn11 = document.querySelector(".btn11");
const btn22 = document.querySelector(".btn22");
const tbody1 = document.querySelector(".tbody1");
const date_year = document.querySelector(".date");
const monthNames = [
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
const abbreviatedMonthNames = monthNames.map((month) => month.slice(0, 3));
const daysOfMonth = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
  "13th",
  "14th",
  "15th",
  "16th",
  "17th",
  "18th",
  "19th",
  "20th",
  "21st",
  "22nd",
  "23rd",
  "24th",
  "25th",
  "26th",
  "27th",
  "28th",
  "29th",
  "30th",
  "31st",
];

function updateDateTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  ampm.innerHTML = `${hours >= 12 ? "PM" : "AM"}`;
  hourTime.innerHTML = `${hours}:${minutes > 9 ? minutes : "0"}:${seconds}`;
}

updateDateTime();

setInterval(updateDateTime, 1000);

function updateDate() {
  let now = new Date();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let year = now.getFullYear();

  dateElement.innerHTML = `${daysOfMonth[day]}, ${
    monthNames[month - 1]
  }, ${year}`;
}
month_year.onclick = function () {
  table.style.display = "";
  table1.style.display = "";
  table2.style.display = "";
};

updateDate();
// thực hiện logic ở table
const now = new Date();
let month = now.getMonth();
let year = now.getFullYear();
month_year.innerHTML = ` ${monthNames[month - 1]}, ${year}`;

function renderCalendar(month, year) {
  // lấy ra ngày tháng hiện tại
  tbody.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonthDays = new Date(year, month, 0).getDate();

  let row = document.createElement("tr");
  for (let i = firstDay; i > 0; i--) {
    let cell = document.createElement("th");
    cell.classList.add("day__cancel");
    cell.innerText = prevMonthDays - i + 1;
    row.appendChild(cell);
    tbody.appendChild(row);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    if (row.children.length === 7) {
      tbody.appendChild(row);
      row = document.createElement("tr");
    }
    let cell = document.createElement("th");
    if (
      day === now.getDate() &&
      month === now.getMonth() &&
      year === now.getFullYear()
    ) {
      cell.classList.add("day__now");
    }
    cell.innerText = day;
    row.appendChild(cell);
  }
  let nextMonthDay = 1;
  while (row.children.length < 7) {
    let cell = document.createElement("th");
    cell.classList.add("day__cancel");
    cell.innerText = nextMonthDay++;
    row.appendChild(cell);
  }
  tbody.appendChild(row);

  while (tbody.children.length < 6) {
    let row = document.createElement("tr");
    for (let i = 0; i < 7; i++) {
      let cell = document.createElement("th");
      cell.classList.add("day__cancel");
      cell.innerText = nextMonthDay++;
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
}

function click1() {
  if (month === 0) {
    year--;
    month = 11;
  } else {
    month--;
  }
  renderCalendar(month, year);
  month_year.innerHTML = ` ${monthNames[month]}, ${year}`;
}

function click2() {
  if (month === 11) {
    year++;
    month = 0;
  } else {
    month++;
  }
  renderCalendar(month, year);
  month_year.innerHTML = ` ${monthNames[month]}, ${year}`;
}

btn2.addEventListener("click", click2);
btn1.addEventListener("click", click1);

renderCalendar(month, year);

// bảng tháng và năm
year1.innerHTML = ` ${year}`;
function renderCalendar1(nextYear) {
  var element = document.querySelector(".month_year1");
  var value = element.textContent;
  tbody1.innerHTML = "";
  let row;
  for (let i = 0; i < abbreviatedMonthNames.length; i++) {
    if (i % 4 === 0) {
      row = document.createElement("tr");
      tbody1.appendChild(row);
    }
    let cell = document.createElement("th");
    if (i === new Date().getMonth() && nextYear == new Date().getFullYear()) {
      cell.classList.add("month__now");
    }
    cell.innerText = abbreviatedMonthNames[i];
    cell.onclick = function () {
      renderCalendar(i, nextYear);
      table.style.display = "block";
      table1.style.display = "none";
      table2.style.display = "none";
      month_year.innerHTML = ` ${monthNames[i]}, ${nextYear}`;
    };
    row.appendChild(cell);
  }
  row = document.createElement("tr");
  for (let i = 0; i < 4; i++) {
    tbody1.appendChild(row);
    let cell = document.createElement("th");
    cell.innerText = abbreviatedMonthNames[i];
    cell.classList.add("month__cancel");
    cell.onclick = function () {
      renderCalendar(i, nextYear);
      table.style.display = "block";
      table1.style.display = "none";
      table2.style.display = "none";
      month_year.innerHTML = ` ${monthNames[i]}, ${nextYear}`;
    };
    row.appendChild(cell);
  }
}
renderCalendar1(year);
function click11() {
  var element = document.querySelector(".month_year1");
  var value = element.textContent;
  value--;
  console.log(value);
  renderCalendar1(value);
  year1.innerHTML = ` ${value}`;
}
function click22(value) {
  var element = document.querySelector(".month_year1");
  var value = element.textContent;
  value++;
  console.log(value);
  renderCalendar1(value);
  year1.innerHTML = ` ${value}`;
}
btn11.addEventListener("click", click11);
btn22.addEventListener("click", click22);

// các năm
const date = new Date();
const yearss = date.getFullYear().toString();
let years = yearss - yearss.charAt(3);

year2.innerHTML = ` ${years} - ${years + 9}`;

function renderCalendar2() {
  tbody2.innerHTML = "";
  let row = document.createElement("tr");
  for (let i = years; i < years + 10; i++) {
    if (row.children.length % 4 === 0) {
      row = document.createElement("tr");
      tbody2.appendChild(row);
    }
    let cell = document.createElement("th");
    if (i === new Date().getFullYear()) {
      cell.classList.add("year__now");
    }
    cell.innerText = i;
    let nextYear = i;
    cell.onclick = function () {
      renderCalendar1(nextYear);

      table.style.display = "none";
      table1.style.display = "block";
      table2.style.display = "none";
      year1.innerHTML = ` ${nextYear}`;
    };
    row.appendChild(cell);
  }

  for (let i = years + 11; i < years + 17; i++) {
    tbody2.appendChild(row);
    if (row.children.length === 4) {
      row = document.createElement("tr");
      tbody2.appendChild(row);
    }

    let cell = document.createElement("th");
    cell.innerText = i;
    let nextYear = i;
    cell.classList.add("month__cancel");
    cell.onclick = function () {
      renderCalendar1(nextYear);
      table.style.display = "none";
      table1.style.display = "block";
      table2.style.display = "none";
      year1.innerHTML = ` ${i}`;
    };

    row.appendChild(cell);
  }
}

renderCalendar2(years);
function click13() {
  years -= 10;
  renderCalendar2(years);

  year2.innerHTML = ` ${years} - ${years + 9}`;
}
function click23() {
  years += 10;
  renderCalendar2(years);
  year2.innerHTML = ` ${years} - ${years + 9}`;
}
btn12.addEventListener("click", click13);
btn23.addEventListener("click", click23);

month_year.addEventListener("click", () => {
  table.style.display = "none";
  table1.style.display = "block";
  table2.style.display = "none";
});

year1.addEventListener("click", () => {
  table.style.display = "none";
  table1.style.display = "none";
  table2.style.display = "block";
});
date_year.addEventListener("click", () => {
  table.style.display = "block";
  table1.style.display = "none";
  table2.style.display = "none";
  renderCalendar(new Date().getMonth(), new Date().getFullYear());
});
