import { render, screen } from '@testing-library/react';
import App from './App';
import Welcome from './components/Welcome/Welcome';
import AllTheBooks, { books } from './components/AllTheBooks/AllTheBooks';
import CommentArea from './components/CommentArea/CommentArea';

test('renders Welcome component correctly', () => {

  render(<Welcome />);


  const welcomeElement = screen.getByText(/Benvenuto in Epicbooks/i);
  expect(welcomeElement).toBeInTheDocument();
});


test('renders the correct number of cards based on the JSON data', () => {
  const {container} = render(<AllTheBooks books={books} />)

  const cards = container.querySelectorAll('.card');

  expect(cards).toHaveLength(books.length);
})

test('renders CommentArea component correctly with no comments', () => {

  render(<CommentArea book={{ id: 1, title: "Il Signore degli Anelli", author: "J.R.R. Tolkien", cover: "https://via.placeholder.com/150" }} />);


  expect(screen.getByText('Aggiungi un commento')).toBeInTheDocument();
});




