

    var ftemp = document.getElementById("temp").innerHTML;
    var wspeed = document.getElementById("speed").innerHTML;
    var wchill = 35.74 + (0.6215 * ftemp) - Math.pow((35.75 * wspeed), .16) + Math.pow((.4275 * ftemp * wspeed), .16); 


    if (ftemp <= 50 && wspeed >= 3) {
        document.getElementById("chill").innerHTML = Math.round(wchill);
    }
    else {
        document.getElementById("chill").innerHTML = "N/A";
    }

