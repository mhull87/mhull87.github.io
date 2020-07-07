window.onload = () => {
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })

        .then(function (jsonObject) {

            const towns = jsonObject['towns'];

if (towns.name == 'Preston') {

    var events = document.createElement('section');
    var header = document.createElement('ul');
    var eventitem1 = document.createElement('li');
    var eventitem2 = document.createElement('li');
    var eventitem3 = document.createElement('li');

    header.textContent = `Upcomming Events`;
    eventitem1.textContent = `${town.events[0]}`;
    eventitem2.textContent = `${town.events[1]}`;
    eventitem3.textContent = `${town.events[2]}`;

    events.appendChild(header);
    events.appendChild(eventitem1);
    events.appendChild(eventitem3);

    document.querySelector('div.events').appendChild(events);

}

if (towns.name == 'Fish Haven') {

    var events = document.createElement('section');
    var header = document.createElement('ul');
    var eventitem1 = document.createElement('li');
    var eventitem2 = document.createElement('li');
    var eventitem3 = document.createElement('li');

    header.textContent = `Upcomming Events`;
    eventitem1.textContent = `${town.events[0]}`;
    eventitem2.textContent = `${town.events[1]}`;
    eventitem3.textContent = `${town.events[2]}`;

    events.appendChild(header);
    events.appendChild(eventitem1);
    events.appendChild(eventitem3);

    document.querySelector('div.events').appendChild(events);

}

if (towns.name == 'Soda Springs') {

    var events = document.createElement('section');
    var header = document.createElement('ul');
    var eventitem1 = document.createElement('li');
    var eventitem2 = document.createElement('li');
    var eventitem3 = document.createElement('li');

    header.textContent = `Upcomming Events`;
    eventitem1.textContent = `${town.events[0]}`;
    eventitem2.textContent = `${town.events[1]}`;
    eventitem3.textContent = `${town.events[2]}`;

    events.appendChild(header);
    events.appendChild(eventitem1);
    events.appendChild(eventitem3);

    document.querySelector('div.events').appendChild(events);
}
});
 };
