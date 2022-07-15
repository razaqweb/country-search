import { useState, useEffect, Fragment } from "react";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState("");

  // Fetch countries
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  console.log(countries);

  return (
    <div className="App">
      <div className="inputField">
        <input
          type="search"
          placeholder="Search Country..."
          onChange={(event) => {
            setSearchField(event.target.value.toLowerCase());
            console.log(searchField);
          }}
        />
      </div>
      <div className="cards">
        {countries
          .filter((country) =>
            country.name.common.toLowerCase().includes(searchField)
          )
          .map((country) => (
            <Fragment key={country.name.common}>
              <div className="card-content-container">
                <div className="img-container">
                  <img
                    alt={`${country.name.common}'s flag`}
                    src={country.flags.png}
                    className="flag-img"
                  />
                </div>
                <div className="text-container">
                  <h3>{country.name.common}</h3>
                  <h3>Capital City: {country.capital}</h3>
                  <h3>Population: {country.population}</h3>
                  <h3>
                    Languages:{" "}
                    {country.languages
                      ? Object.values(country.languages).join(", ")
                      : null}
                  </h3>
                </div>
              </div>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default App;
