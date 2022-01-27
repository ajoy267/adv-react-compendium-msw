import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../../views/Home/Home';

test('pokemon should search by query', async () => {
  render(<Home />);

  const searchInput = await screen.findByRole('textbox');
  const pokemonName = 'butterfree';
  userEvent.type(searchInput, pokemonName);

  const btn = screen.getByRole('button');
  userEvent.click(btn);

  const pokemon = await screen.findAllByText(pokemonName, { exact: false });
  const result = pokemon.map((item) => item.textContent);
  const handleSubmit = (name) => name.toLowerCase().includes(pokemonName);
  const checkName = result.every(handleSubmit);

  expect(checkName).toBe(true);
});
