import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weather, setWeather] = useState(null);
  const APIKEY = import.meta.env.VITE_SOME_KEY;

  useEffect(() => {
    if (search) {
      axios
        .get(`https://restcountries.com/v3.1/name/${search}`)
        .then((response) => {
          setCountries(response.data);
        })
        .catch((error) => {
          console.error('Error fetching country data:', error);
        });
    } else {
      setCountries([]);
    }
  }, [search]);

  useEffect(() => {
    if (selectedCountry) {
      const capital = selectedCountry.capital[0];
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${APIKEY}&units=metric`
        )
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [selectedCountry]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleShowCountry = (country) => {
    setSelectedCountry(country);
    setWeather(null);
  };

  return (
    <>
      <h1>Country Information</h1>
      <input
        type='text'
        value={search}
        onChange={handleSearchChange}
        placeholder='Search for a country...'
      />
      {countries.length > 10 && <p>Too many matches, specify another filter</p>}
      {countries.length <= 10 && countries.length > 1 && (
        <ul>
          {countries.map((country) => (
            <li key={country.cca3}>
              {country.name.common}
              <button onClick={() => handleShowCountry(country)}>Show</button>
            </li>
          ))}
        </ul>
      )}
      {selectedCountry && (
        <>
          <h2>{selectedCountry.name.common}</h2>
          <p>Capital: {selectedCountry.capital[0]}</p>
          <p>Population: {selectedCountry.population}</p>
          <h3>Languages</h3>
          <ul>
            {Object.values(selectedCountry.languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img
            src={selectedCountry.flags.png}
            alt={`Flag of ${selectedCountry.name.common}`}
            width='150'
          />
          {weather && (
            <>
              <h3>Weather in {selectedCountry.capital[0]}</h3>
              <p>Temperature: {weather.main.temp} °C</p>
              <p>Weather: {weather.weather[0].description}</p>
            </>
          )}
        </>
      )}
    </>
  );
};

export default App;
