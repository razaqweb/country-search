const Card = ({ countries, searchField }) => {
  return countries
    .filter((country) => {
      const name = country.name.common;
      const capital = country.capital
        ? country.capital.toString().toLowerCase().includes(searchField)
        : undefined;
      const languages = country.languages
        ? Object.values(country.languages)
            .toString()
            .toLocaleLowerCase()
            .includes(searchField)
        : undefined;

      return name.toLowerCase().includes(searchField) || capital || languages;
    })
    .map((country) => (
      <div className="card-content-container" key={country.name.common}>
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
    ));
};

export default Card;
