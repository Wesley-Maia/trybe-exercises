const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Author = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.headers;

  // console.log(author_id);

  const books  = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
  // res.status(200).json('ok');
});

// http://localhost:3000/authors/1
app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));