const restCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => displayData(data));
};

const displayData = (countries) => {
  const countriesContainer = document.getElementById("countries");
  //   for of loop get country
  //   for (const country of countries) {
  // console.log(country);
  //   }
  //   for each get country
  //   countries.forEach((country) => {
  //     console.log(country);
  //   });
  //   map get the country
  countries.map((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList = "country";
    countryDiv.innerHTML = `

    <h2>Country Name: ${country.name.common} </h2>
    <p>Capital: ${country.capital ? country.capital[0] : "no capital"} </p>
    <button id="details" onclick="loadCountryDetails('${
      country.cca2
    }')">Details</button>

    `;
    // console.log(country.cca2);
    countriesContainer.appendChild(countryDiv);
  });
};

const loadCountryDetails = (code) => {
  // https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDataDisplay(data[0]));
};

const showDataDisplay = (details) => {
  const countryDetailsContainer = document.getElementById("country-details");
  //   const div = document.createElement("div");
  countryDetailsContainer.innerHTML = `
  <h3>Name: ${details.name.common} </h3>
  <img src='${details.flags.png}' />


  `;

  console.log(details);
};

restCountries();
