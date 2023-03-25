/* eslint-disable */
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/CountiesSlice/CountriesSlice';
import CountryCSS from './styles/Country.module.css';
import Navbar from './Navbar';

const Country = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(id)
  

  const { CountryData } = useSelector((state) => state.Countries);
  
  useEffect(() => {
    if (CountryData.length === 0) {
      dispatch(fetchCountries());
    }
  }, [CountryData, dispatch]);

  const country = CountryData.find((display) => display.Name.common === id);

    return (
        <div className={CountryCSS.countryMainContainer}>
          <div className={CountryCSS.countryContainer}>
            <Navbar />
          { country && (
            <div className={CountryCSS.countryDetails}>
              <div className={CountryCSS.countryAndFlag}>
              <div className={CountryCSS.countryAndFlagItem}> <span> <img src={country.flagImage} className={CountryCSS.countryFlag}/> </span> <span className={CountryCSS.countryFlagName}>{country.flag}</span> </div>
            </div>
            <ul className={CountryCSS.countryInformation}>
              <li>Capital City:  {country.capital}</li>
              <li>Population:  {country.Population}</li>
              <li> Continent: {country.continent}</li>
              <li> Region: {country.region}</li>
              <li> Start of Week: {country.startOfWeek}</li>
            </ul>
          </div>
          )}
          </div>
        </div>
    )
  }
  
  export default Country;