var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const values=['Geo','Manuel','Faizal','Febin','Anna','Pranoy','Anajan','Jitho','Akash']
  const person={name:"Geo",admin:true,tcomment:"This is a valid comment",fcomment:"This is not a valid comment",data:{comment1:"You are in College no class today",comment2:"You are not in college have class today"}}
  res.render('index', {values,person});
});

module.exports = router;
