import { render, screen } from '@testing-library/react';
import Home from './Home';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';

// const server = setupServer(rest.get());

test('should render loading state', () => {
  render(<Home />);

  const loading = screen.getByText(/loading/i);

  expect(loading).toBeInTheDocument();
});

test('should render Controls and Pokemon List', async () => {
  render(<Home />);

  const heading = await screen.findByRole('heading', { name: /pokemon/i });
  const searchInput = screen.getByRole('textbox');
  const searchBtn = screen.getByRole('button');
  const pokemon = screen.getByText(/butterfree/i);

  expect(heading).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
  expect(searchBtn).toBeInTheDocument();
  expect(pokemon).toBeInTheDocument();
});
