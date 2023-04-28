import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hi');
})

app.listen(port, err => err ? console.error(err) : console.log(`index.js running on port ${port}`))
