import express from 'express';
import axios from 'axios';
const router = express.Router();

// Get all users
router.get('/', (req, res) => {
  // axios.get('https://api.salesloft.com/v2/people.json', {
  //   headers: {
  //     Authorization: 'BEARER ' + process.env.APIKEY
  //   }
  // })
  // .then((response) => {
  //   console.log('success!');
  //   console.log(response);
  //   return res.send(response);
  // })
  // .catch((err) => {
  //   console.log('error!');
  //   console.log(err);
  //   return res.send('error!');
  // })
  // return res.send('tada!');
  const unirest = require("unirest");

  const request = unirest("GET", "http://api.salesloft.com/v2/people.json");

  request.headers({
    "Postman-Token": "a20bf18c-f209-41af-92b3-279614de102e",
    "Cache-Control": "no-cache",
    "Authorization": ("BEARER " + process.env.APIKEY)
  });


  request.end(function (response) {
    if (response.error) throw new Error(response.error);

    console.log(response.body);
    return res.send(response.body);
  });

})

module.exports = router;