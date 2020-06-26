

    var ftemp = document.getElementById("currentTemp").innerHTML;
    var wspeed = document.getElementById("speed").innerHTML;
    var wchill = 35.74 + (0.6215 * ftemp) - 35.75 * Math.pow((wspeed), .16) + .4275 * ftemp * Math.pow((wspeed), .16); 


    if (ftemp <= 50 && wspeed >= 3) {
        document.getElementById("chill").innerHTML = Math.round(wchill);
    }
    else {
        document.getElementById("chill").innerHTML = "N/A";
    }

