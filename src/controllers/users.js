import express from 'express';
import unirest from 'unirest';
const router = express.Router();

// Get all users
router.get('/', (req, res) => {
  const request = unirest("GET", "http://api.salesloft.com/v2/people.json?per_page=100");

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