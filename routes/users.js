var express = require('express');
var router = express.Router();
var model = require('../model');

router.get('/', function(req, res) {
  model.user.findAll({
    where: {
      firstName: req.query.firstName
    }
  }).then(function (result) {
    console.log(result);
    res.json(result);
  }).catch(function (err) {
    console.log(err);
  })
})

router.post('/', function(req,res){
    model.user.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }).then(function (result) {
      res.json(result);
    }).catch(function (err) {
      console.log(err);
    })
})
router.delete('/', function(req,res) {
  model.user.destroy({ 
    where: { 
      firstName: req.query.firstName 
    } 
  }).then(function (result) { 
    res.json(result);
  })
})

router.put("/", function(req,res){ 
  var b = req.query;
  console.log(b);
  var updateObj = { lastName : b.lastName } 
  var whereObj = { 
    where : { 
      firstName: b.firstName,
    } 
  }

  model.user.update(updateObj, whereObj).then(function(result){ 
    console.log(result);
    if (result == 1) { 
      res.json('update success');
    } else { 
      res.json('update fail'); 
    }
  }).catch(function (err) { 
    console.log(err); 
  }) 
});

module.exports = router;
