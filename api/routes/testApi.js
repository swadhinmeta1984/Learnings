var express = require('express');
var fs = require('fs');
var router = express.Router();


let users = [{name:"Swadhin", id:1, age:30},
    {name:"Mina", id:2, age:30}];

router.get("/", (req, res) =>{
    res.send("This is my 1st API..");
});

router.get('/users', function(req, res) {
    res.send(users);
    
    
});


// fs.readFile('input.txt', function (err, data) {
//   if (err) return console.error(err);
//   console.log(data.toString());
// });

router.get("/users/:year/:month", (req, res) =>{
    //res.send(req.params.month);
    res.send(req.query);
});

router.post('/users', (req, res) => {
    
    let user = {
        name : req.body.name,
        id: users.length + 1,
        age: 40
    }
    
    users.push(user);
    res.send(user);
});

router.put('/users/:id/', (req, res) => {    
    let user = users.find(u => u.id === parseInt(req.params.id));    
    user.name = req.body.name;
    res.send(user);
});

router.delete('/users/:id/', (req, res) => {    
    let user = users.find(u => u.id === parseInt(req.params.id));    
    const index = users.indexOf(user);    
    users.splice(index, 1);    
    res.send(user);
});

module.exports = router;