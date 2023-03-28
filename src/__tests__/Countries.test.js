import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Countries from '../components/Countries';

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

  test('is select element displaying', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Countries />
        </Provider>
      </BrowserRouter>,
    );
    const missionRows = screen.getByText('All');

    expect(missionRows).toBeInTheDocument();
  });

  test('is Countries container rendering', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Countries />
        </Provider>
      </BrowserRouter>,
    );
    const MissionsContainer = screen.getByTestId('countryContainer');
    expect(MissionsContainer).toBeInTheDocument();
  });

  test('is list container rendering', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Countries />
        </Provider>
      </BrowserRouter>,
    );
    const List = screen.getAllByRole('list');
    expect(List.length).toBe(initialState.Countries.CountryData.length);
  });
});
