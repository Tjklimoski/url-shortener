import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@learning.pp2n17d.mongodb.net/urlShortener?retryWrites=true&w=majority`
);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, err => err ? console.error(err) : console.log(`index.js running on port ${port}`))
