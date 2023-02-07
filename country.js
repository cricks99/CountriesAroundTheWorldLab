class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}

const countryMap = new Map([
    ['usa', new Country("USA", "English", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"])],
    ['mexico', new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"])],
    ['algeria', new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])],
    ['israel', new Country("Israel", "Hebrew", "שלום עולם", ["blue", "white", "blue"])],
    ['germany', new Country("Germany", "German", "Hallo Welt", ["black", "red", "gold"])]
]);

const switchCountry = () => {
    let input = document.getElementById('CountryList').value;
    let country = input.toLowerCase();
    
    displayColors(country);
};

const displayColors = input => {
    if (!countryMap.has(input))
        return;

    let country = countryMap.get(input);

    document.getElementById('CountryName').innerText = country.name;
    document.getElementById('OfficialLanguage').innerText = country.lang;
    document.getElementById('HelloWorld').innerText = country.greeting;
    document.getElementById('Color1').style.backgroundColor = country.colors[0];
    document.getElementById('Color2').style.backgroundColor = country.colors[1];
    document.getElementById('Color3').style.backgroundColor = country.colors[2];
    document.getElementById('CountryFlag').setAttribute('src', country.name.toLowerCase() + '.png');
}

const generateSelectOptions = () => {
    let optionItem;

    [...countryMap.keys()].forEach(key => 
        {
            optionItem = document.createElement('option');
            optionItem.innerText = countryMap.get(key).name;
            document.getElementById('CountryList').appendChild(optionItem);
        }
        );
};
