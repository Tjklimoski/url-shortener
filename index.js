import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import urlShortener from './urlShortener.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@learning.pp2n17d.mongodb.net/urlShortener?retryWrites=true&w=majority`
);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));

app.get('/', async (req, res) => {
  const urls = await urlShortener.find();
  res.render('index', {urls: urls});
})

app.post('/shortenUrl', async (req, res) => {
  await urlShortener.create({full: req.body.fullUrl});
  res.redirect('/');
});

app.get('/:shortUrl', async (req, res) => {
  const {full: fullUrl} = await urlShortener.findOne({short: req.params.shortUrl});
  res.redirect(fullUrl);
})

app.listen(port, err => err ? console.error(err) : console.log(`index.js running on port ${port}`))
