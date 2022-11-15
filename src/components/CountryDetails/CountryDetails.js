import { Card, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function CountryDetails({ countries }) {
  const { countryId } = useParams();

  const foundCountry = countries.find((oneCountry) => {
    return oneCountry.alpha3Code === countryId;
  });
  //console.log(foundCountry.name.official);

  return (
    <Card style={{ width: '70%', margin: 'auto' }}>
      <Card.Header>{foundCountry.name.official}</Card.Header>
      <Card.Body>
        <img
          className="smallFlags"
          src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
          alt=""
        />
        <Card.Text>Capital: {foundCountry.capital}</Card.Text>
        <Card.Text>Area: {foundCountry.area}</Card.Text>
        <Card.Text>Borders: {foundCountry.borders}</Card.Text>
      </Card.Body>
    </Card>
  );
}
