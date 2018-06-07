import express from 'express';
import unirest from 'unirest';
const router = express.Router();

// Get all users
router.get('/', (req, res) => {
  let page;
  let perPage;
  let url = 'http://api.salesloft.com/v2/people.json';
  if (req.query && req.query.page) {
    url += '?page=' + req.query.page;
  }
  const request = unirest("GET", url);

  request.headers({
    "Postman-Token": "a20bf18c-f209-41af-92b3-279614de102e",
    "Cache-Control": "no-cache",
    "Authorization": ("BEARER " + process.env.APIKEY)
  });

  request.end(function (response) {
    if (response.error) {
      return console.log(response.error);
    }

    console.log(response.body);
    return res.send(response.body);
  });
})

module.exports = router;