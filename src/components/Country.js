import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import CountryCSS from './styles/Country.module.css';
import Navbar from './Navbar';

const Country = () => {
  const { id } = useParams();

  const { CountryData } = useSelector((state) => state.Countries);

  const country = CountryData.find((display) => display.Name.common === id);

  return (
    <div className={CountryCSS.countryMainContainer} data-testid="details">
      <div className={CountryCSS.countryContainer}>
        <Navbar />
        { country && (
        <div className={CountryCSS.countryDetails}>
          <div className={CountryCSS.countryAndFlag}>
            <div className={CountryCSS.countryAndFlagItem}>
              {' '}
              <span>
                {' '}
                <img src={country.flagImage} className={CountryCSS.ctryFlag} alt={country.flag} />
                {' '}
              </span>
              {' '}
              <span className={CountryCSS.countryFlagName}>{country.flag}</span>
              {' '}
            </div>
          </div>
          <ul className={CountryCSS.countryInformation}>
            <li className={CountryCSS.countryInformationList}>
              Capital City:
              {country.capital}
            </li>
            <li className={CountryCSS.countryInformationList}>
              Population:
              {country.Population}
            </li>
            <li className={CountryCSS.countryInformationList}>
              {' '}
              Continent:
              {country.continent}
            </li>
            <li className={CountryCSS.countryInformationList}>
              {' '}
              Region:
              {country.region}
            </li>
            <li className={CountryCSS.countryInformationList}>
              {' '}
              Start of Week:
              {country.startOfWeek}
            </li>
          </ul>
        </div>
        )}
      </div>
    </div>
  );
};

export default Country;
