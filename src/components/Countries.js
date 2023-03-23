/* eslint-disable */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/CountiesSlice/CountriesSlice';

const Countries = () => {

  const dispatch = useDispatch();

  const { CountryData } = useSelector((state) => state.Countries);
  console.log(CountryData)

  useEffect(()=> {
      dispatch(fetchCountries());
  })

  return (
    <div>Countries appear here</div>
  )
}

export default Countries;
