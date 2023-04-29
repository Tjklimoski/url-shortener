import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, err => err ? console.error(err) : console.log(`index.js running on port ${port}`))
