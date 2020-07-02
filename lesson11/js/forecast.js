//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//~~~~~~~~~~~~~~~~~~~~~~~~~~Preston~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=9e82453a440594b3cdfb2221e87e0b94';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        var current = jsObject.weather[0].main;
        var ftemp = jsObject.main.temp;
        var wspeed = jsObject.wind.speed;
        var hum = jsObject.main.humidity;
        var wchill = 35.74 + (0.6215 * ftemp) - 35.75 * Math.pow((wspeed), .16) + .4275 * ftemp * Math.pow((wspeed), .16); 
        document.getElementById('currently').textContent = current;
        document.getElementById('currentTemp').textContent = Math.round(ftemp);
        document.getElementById('humidity').textContent = hum;
        document.getElementById('speed').textContent = Math.round(wspeed);

        if (ftemp <= 50 && wspeed >= 3) {
            document.getElementById('chill').innerHTML = Math.round(wchill) + "&#8457;";
        }
        else {
            document.getElementById('chill').innerHTML = 'N/A';
        }
    });

const getURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=9e82453a440594b3cdfb2221e87e0b94';

fetch(getURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let day = 0;
        fivedayforecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            const imagesrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
            const desc = forecast.weather[0].description;
            
            document.getElementById(`forecast${day+1}`).textContent = Math.round(forecast.main.temp);
            document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`img${day+1}`).setAttribute('src', imagesrc);
            document.getElementById(`img${day+1}`).setAttribute('alt', desc);
 
            day++;
        });
    });
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Soda Springs~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const apiURLSS = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=9e82453a440594b3cdfb2221e87e0b94';

fetch(apiURLSS)
    .then((response) => response.json())
    .then((jsObject) => {

        var current = jsObject.weather[0].main;
        var ftemp = jsObject.main.temp;
        var wspeed = jsObject.wind.speed;
        var hum = jsObject.main.humidity;
        var wchill = 35.74 + (0.6215 * ftemp) - 35.75 * Math.pow((wspeed), .16) + .4275 * ftemp * Math.pow((wspeed), .16); 
        document.getElementById('sscurrently').textContent = current;
        document.getElementById('sscurrentTemp').textContent = Math.round(ftemp);
        document.getElementById('sshumidity').textContent = hum;
        document.getElementById('ssspeed').textContent = Math.round(wspeed);

        if (ftemp <= 50 && wspeed >= 3) {
            document.getElementById('sschill').innerHTML = Math.round(wchill) + "&#8457;";
        }
        else {
            document.getElementById('sschill').innerHTML = 'N/A';
        }
    });

const getURLSS = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=9e82453a440594b3cdfb2221e87e0b94';

fetch(getURLSS)
    .then((response) => response.json())
    .then((jsObject) => {

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let day = 0;
        fivedayforecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            const imagesrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
            const desc = forecast.weather[0].description;
            
            document.getElementById(`ssforecast${day+1}`).textContent = Math.round(forecast.main.temp);
            document.getElementById(`ssdayofweek${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`ssimg${day+1}`).setAttribute('src', imagesrc);
            document.getElementById(`ssimg${day+1}`).setAttribute('alt', desc);
 
            day++;
        });
    });
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Fish Haven~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

    const apiURLFH = 'https://api.openweathermap.org/data/2.5/weather?lat=42&lon=111&units=imperial&APPID=9e82453a440594b3cdfb2221e87e0b94';

fetch(apiURLFH)
    .then((response) => response.json())
    .then((jsObject) => {

        var current = jsObject.weather[0].main;
        var ftemp = jsObject.main.temp;
        var wspeed = jsObject.wind.speed;
        var hum = jsObject.main.humidity;
        var wchill = 35.74 + (0.6215 * ftemp) - 35.75 * Math.pow((wspeed), .16) + .4275 * ftemp * Math.pow((wspeed), .16); 
        document.getElementById('fhcurrently').textContent = current;
        document.getElementById('fhcurrentTemp').textContent = Math.round(ftemp);
        document.getElementById('fhhumidity').textContent = hum;
        document.getElementById('fhspeed').textContent = Math.round(wspeed);

        if (ftemp <= 50 && wspeed >= 3) {
            document.getElementById('fhchill').innerHTML = Math.round(wchill) + "&#8457;";
        }
        else {
            document.getElementById('fhchill').innerHTML = 'N/A';
        }
    });

const getURLFH = 'https://api.openweathermap.org/data/2.5/forecast?lat=42&lon=111&units=imperial&APPID=9e82453a440594b3cdfb2221e87e0b94';

fetch(getURLFH)
    .then((response) => response.json())
    .then((jsObject) => {

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let day = 0;
        fivedayforecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            const imagesrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
            const desc = forecast.weather[0].description;
            
            document.getElementById(`fhforecast${day+1}`).textContent = Math.round(forecast.main.temp);
            document.getElementById(`fhdayofweek${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`fhimg${day+1}`).setAttribute('src', imagesrc);
            document.getElementById(`fhimg${day+1}`).setAttribute('alt', desc);
 
            day++;
        });
    });