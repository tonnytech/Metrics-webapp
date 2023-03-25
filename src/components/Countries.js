/* eslint-disable */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/CountiesSlice/CountriesSlice';
import { Link } from 'react-router-dom';

const Countries = () => {

  const dispatch = useDispatch();

  const [continent, setContinent] = useState('all');

  const { CountryData } = useSelector((state) => state.Countries);
  
  // CountryData.map((c)=>(console.log(c.continent)))

  useEffect(()=> {
      dispatch(fetchCountries());
  },[dispatch]);

  return (
    <div>
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
      {CountryData.filter((country) => {
          if (continent === 'all') {
            return country;
          }
          return country.continent === continent;
        }).map((country)=>(
        <Link to={`/${country.Name.common}`}>
          <ul >
            <li>{country.Name.common}</li>
            <li>{country.flag}</li>
          </ul>
        </Link>
        
      ))}
    </div>
  )
}

export default Countries;
