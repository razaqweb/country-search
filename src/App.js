import { useState, useEffect } from "react";
import SearchBox from "./Components/search-box/search-box.component";
import CountriesDirectory from "./Components/countries-directory/countries-directory.component";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [cloneCountries, setCloneCountries] = useState(countries);

  // Fetch countries
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  useEffect(() => {
    setCloneCountries(countries);
  }, [countries, searchField]);

  const searchHandler = (event) => {
    setSearchField(event.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <div className="heading-container">
        <h1>Country Search</h1>
        <p>A directory of every country in the world.</p>
        <p>
          Use the search box below to find countries by name, the languages
          spoken, or capital city.
        </p>
      </div>
      <div className="search-box-container">
        <SearchBox
          type="search"
          placeholder="Search by Country, Language, or Capital City..."
          onChange={searchHandler}
        />
      </div>
      <CountriesDirectory
        countries={cloneCountries}
        searchField={searchField}
      />
    </div>
  );
};

export default App;
