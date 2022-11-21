var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/users', (req, res) => {
    fs.readFile('users.json', function (err, data) {
        if (err) return console.error(err);
        
        res.send(data.toString());
      });
});


module.exports = router;


