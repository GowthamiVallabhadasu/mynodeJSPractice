var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 let data=[{
   name: "Sandya",
   age:20,
   salary:5000
 },
 
 {
  name: "nandu",
  age:24,
  salary:400000
},
 
]
res.render('index',{title:'Express', myName: 'gowthami', users:data})
});

module.exports = router;
