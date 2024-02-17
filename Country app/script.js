let myMap = null;

const searchBtn = document.querySelector(".search");
const input = document.querySelector("#word");
let flag = document.querySelector(".flag");
const skeleton = document.querySelector(".skeleton");
const container = document.querySelector(".container");
let countryName = document.querySelector(".name");
let otherNames = document.querySelector(".other-names");
let moreInfos = document.querySelector(".m-infos");

function showLoader(doneFetching) {
  if(doneFetching) {
    setTimeout(() => {
      skeleton.style.display = "none";
      container.style.display = "block";
    }, 1000);
  } else {
    skeleton.style.display = "block";
    container.style.display = "none";
  }
}

window.addEventListener("load", () => {
  showLoader(true);
});

function renderMap(lat, long, name) {
  if (myMap != null) {
    myMap.remove();
  }

  myMap = L.map('map').setView([lat, long], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  L.marker([lat, long]).addTo(myMap)
    .bindPopup(`The capital of ${name} <br/> on the map`)
    .openPopup();
}

const getJson = coordinates => {
  const url = `https://geocode.xyz/${coordinates[0]},${coordinates[1]}?geoit=json&auth=835319422960639705154x97845`;

  fetch(url).then(response => response.json()).then(data => everyThing (data.country));
};

searchBtn.addEventListener("click", e => {
  e.preventDefault();
  showLoader(false);
  
  const enteredText = input.value.trim();
  let inputValue = [];
  if(enteredText.includes(",")) {
     inputValue = enteredText.split(",")
  }else{
     inputValue = enteredText.split(" ")
  }
  console.log(inputValue);
  input.value = "";
  if (inputValue.length > 1) {
    getJson(inputValue);
  } else {
    everyThing(inputValue);
  }
});

function everyThing(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => response.json()).then(data => {
    const [value] = data;
    const { population, region, startOfWeek, language, independent, subregion, capital, coatOfArms, timezones, latlng } = value;
    let currencies = Object.entries(value.currencies).flat(Infinity);
    let currencyName = currencies[0];
    let currencyinfo = Object.values(currencies[1]);
    let [lat, long] = data[0].capitalInfo.latlng;
    let timezone = [...timezones];

    flag.srcset = flag.src = value.flags.svg;
    countryName.textContent = value.name.common;
    otherNames.innerHTML = "";

    value.altSpellings.forEach(name => {
      otherNames.innerHTML += `<p> ${name} </p>`;
    });

    const cInfos = `
            <p>Capital: ${value.capital}</p> 
            <p>Population: ${population}</p>
            <p>Continent: ${value.continents}</p>
            <p>Region: ${region}</p>
            <p>Sub-region: ${subregion} </p>
            <p>Independent: ${independent}</p>
            <p>Week start day: ${startOfWeek}</p>
            <br/>
            <p><b> Finance </b></p>
            <p>Currency: ${currencyName}</p>
            <p>The sign: ${currencyinfo[1]}</p>
            <p>The name: ${currencyinfo[0]}</p>
            <br/>
            <p><b> Time zone(s)</b></p>
            <p>${timezones[0]}</p>
            ${timezone.map(time => `<p>${time}</p>`).join('')}
            <br/><br/>
            <p><b> Coat Of Arm </b></p><br/>
            <img src="${coatOfArms.svg}" alt=" coat of arms not available"/>`;

    moreInfos.innerHTML = "";
    moreInfos.insertAdjacentHTML("beforeend", cInfos);
    return data;
  }).then(data => {
    const { capitalInfo, latlng, name } = data[0];
    const [lat, long] = capitalInfo.latlng;
    const theName = name.common;
    const url = `https://geocode.xyz/${lat},${long}?geoit=json&auth=835319422960639705154x97845`;

    fetch(url).then(response => response.json()).then(data => {
      const { latt: lat, longt: long, country } = data;
      renderMap(lat, long, country);
      showLoader(true);
    }).catch(error => {
      console.error("there's an error", error);
    });
  });
}

//Loading first data
everyThing("USA");

/* 
.......Co-ordinates.......
Test data: § Coordinates 

  latitude longitude 
  ....................
   1: 52.508, 13.381
   2: 19.037, 72.873
   3: -33.933, 18.474 

*/