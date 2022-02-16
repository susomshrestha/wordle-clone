const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.options('*', cors());

const axios = require('axios').default;

app.get('/wordle', (req, res) => {
  let options = {
    method: 'GET',
    url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
    params: { count: '1', wordLength: '5' },
    headers: {
      'x-rapidapi-host': 'random-words5.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPID_API_KEY,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data[0]);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started');
});
