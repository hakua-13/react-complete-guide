import { render, screen } from '@testing-library/react';
import Greet from './Greet';

it('h1が存在するかどうか', () => {
  render(<Greet/>);
  const h1E1 =  screen.getByText('こんにちは');
  expect(h1E1).toBeInTheDocument();
});