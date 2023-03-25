import { Route, Routes } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCountries } from './redux/CountiesSlice/CountriesSlice';
import './App.css';
import Countries from './components/Countries';
import Country from './components/Country';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:id" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
