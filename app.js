const year = document.getElementById("year");
const currentYear = new Date().getFullYear();

year.insertAdjacentText("afterbegin", currentYear);
