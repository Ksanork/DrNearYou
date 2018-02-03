const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', function(req, res) {
    res.send('api works');
});

router.get('/doctors', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({id: 1, firstname: 'Jan', secondname: 'Kowalski'}));
});

module.exports = router;