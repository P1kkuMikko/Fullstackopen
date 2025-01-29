import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => response.data)
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <>
      <h1>Countries</h1>{' '}
      <ul>
        {countries.map((country, index) => {
          return <li key={index}>{country.name.common}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
