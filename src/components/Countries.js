import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CountriesCSS from './styles/Countries.module.css';
import Navbar from './Navbar';

const Countries = () => {
  const [continent, setContinent] = useState('all');

  const { CountryData } = useSelector((state) => state.Countries);

  return (
    <div className={CountriesCSS.countryMainContainer} data-testid="countryContainer">
      <div className={CountriesCSS.countryContainer}>
        <Navbar />
        <h1>Countries</h1>
        <div>
          <select
            name="continents"
            id="continents"
            onChange={(e) => setContinent(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            <option value="South America">South America</option>
            <option value="Antarctica">Antarctica</option>
          </select>
        </div>
        <div className={CountriesCSS.countryList}>
          {CountryData.filter((country) => {
            if (continent === 'all') {
              return country;
            }
            return country.continent === continent;
          }).map((country) => (
            <Link to={`/${country.Name.common}`} key={country.Name.common} className={CountriesCSS.link}>
              <ul className={CountriesCSS.linkList}>
                <li className={CountriesCSS.countryName}>{country.Name.common}</li>
                <li className={CountriesCSS.countryFlag}>{country.flag}</li>
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
