import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Country from '../components/Country';

describe('Countries testing: "features and components"', () => {
  const mockStore = configureStore([]);
  const initialState = {
    Countries: {
      CountryData: [
        {
          Name: 'kenya',
          Population: 500,
          startOfWeek: 'monday',
        },
        {
          Name: 'Uganda',
          Population: 700,
          startOfWeek: 'Sunday',
        },
        {
          Name: 'Egypt',
          Population: 550,
          startOfWeek: 'Tuesday',
        },
      ],
    },
  };
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });
  test('is more detail container rendering', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Country />
        </Provider>
      </BrowserRouter>,
    );
    const moreDetails = screen.getByTestId('details');
    expect(moreDetails).toBeInTheDocument();
  });
});
