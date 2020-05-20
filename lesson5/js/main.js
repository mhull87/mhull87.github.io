//hamberger menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//copyright year
var d = new Date();
document.getElementById("year").textContent = d.getFullYear();

//Current date on footer
var date = new Date();

var dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var day = dow[date.getDay()];
var number = date.getDate();
var m = month[date.getMonth()];
var year = date.getFullYear();

document.getElementById("date").innerHTML = (day + ", " + number + " " + m + " " + year)


