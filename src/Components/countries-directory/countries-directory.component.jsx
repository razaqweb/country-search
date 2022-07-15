import Card from "../card/card.component";
const CountriesDirectory = ({ countries, searchField }) => {
  return (
    <div className="cards">
      <Card countries={countries} searchField={searchField} />
    </div>
  );
};

export default CountriesDirectory;
