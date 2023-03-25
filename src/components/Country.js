/* eslint-disable */
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/CountiesSlice/CountriesSlice';

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
        <>
          { country && (
            <div>
              <div>
              <div> <span> <img src={country.flagImage} /> </span> <span>{country.flag}</span> </div>
            </div>
            <ul>
              <li>{country.capital}</li>
              <li>{country.Population}</li>
              <li>{country.continent}</li>
              <li>{country.region}</li>
              <li>{country.startOfWeek}</li>
            </ul>
          </div>
          )}        
        </>
    )
  }
  
  export default Country;