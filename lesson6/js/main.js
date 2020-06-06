//hamberger menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//copyright year
var d = new Date();
document.getElementById("year").textContent = d.getFullYear();

//Current date on footer

var dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var day = dow[d.getDay()];
var number = d.getDate();
var m = month[d.getMonth()];
var year = d.getFullYear();

document.getElementById("date").innerHTML = (day + ", " + number + " " + m + " " + year);

//Preston Pancake banner
if (d.getDay() == [5]) {
    document.getElementById("banner").innerHTML = ("Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.");

} else {
    document.getElementById("banner").style.display = "none";
}