var d = new Date();
var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
}
document.getElementById("year").textContent = d.getFullYear();
document.getElementById("date").textContent = new Date().toLocaleDateString("en-US", options);