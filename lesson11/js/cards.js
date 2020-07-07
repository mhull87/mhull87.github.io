//JSON for home page
window.onload = () => {
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })

        .then(function (jsonObject) {

            const towns = jsonObject['towns'];
            var three = towns.filter(town => (town.name == 'Preston' || town.name == 'Fish Haven' || town.name == 'Soda Springs'));

            three.forEach(town => {

                var card = document.createElement('section');
                var name = document.createElement('h3');
                var motto = document.createElement('h4');
                var image = document.createElement('img');
                var year = document.createElement('p');
                var pop = document.createElement('p');
                var rain = document.createElement('p');

                name.textContent = `${town.name}`;
                motto.textContent = `${town.motto}`;
                image.setAttribute('src', 'images/' + town.photo);
                image.setAttribute('alt', town.name);
                year.textContent = `Year Founded: ${town.yearFounded}`;
                pop.textContent = `Population: ${town.currentPopulation}`;
                rain.textContent = `Annual Rain Fall: ${town.averageRainfall}`;

                card.appendChild(name);
                card.appendChild(motto);
                card.appendChild(image);
                card.appendChild(year);
                card.appendChild(pop);
                card.appendChild(rain);

                document.querySelector('div.cards').appendChild(card);

            })
        })

};