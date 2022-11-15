import countries from '../../countries.json';
import './CountriesList.css';
import { Link } from 'react-router-dom';

export default function CountriesList() {
  //console.log(countries);

  const countriesList = countries.map((country, index) => {
    // se não usar key o programa dá vários warnings
    // key é um identificador para tornar cada elemento único
    return (
      <div className="col-5" key={index}>
        <Link to={country.alpha3Code} className="list-group">
          <img
            className="smallFlags"
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt=""
          />
          <p>
            {country.alpha2Code} {country.name.common}
          </p>
        </Link>
      </div>
    );
  });
  return <div>{countriesList}</div>;
}
