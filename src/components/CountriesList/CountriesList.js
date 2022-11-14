import countries from '../../countries.json';

export default function CountriesList() {
  //console.log(countries);

  const countriesList = countries.map((country, index) => {
    // se não usar key o programa dá vários warnings
    // key é um identificador para tornar cada elemento único
    return (
      <div className="col-5" key={index}>
        <div className="list-group">
          {/* <img src="https://flagpedia.net/data/flags/icon/72x54/br.png" /> */}
          <a
            className="list-group-item list-group-item-action"
            href={country.alpha3Code}
          >
            {country.alpha2Code} {country.name.official}
          </a>
        </div>
      </div>
    );
  });
  return <div>{countriesList}</div>;
}
