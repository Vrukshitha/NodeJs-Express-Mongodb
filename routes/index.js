var express = require('express');
var router = express.Router();
var Consumer=require('../model/user.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Hi' }); 
});

router.get('/express', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/express/node', function(req, res, next) { //get data from user
  res.render('index', { title: 'Node Js' });
});

router.post('/addUser', function(req, res, next) {  // post method to add new entry
 var userObj = new Consumer(req.body);
userObj.save((err,data) => {
if(err){
  res.status(404).json({msg:"no data saved",err:err});
} else {
  res.status(200).json({msg:"saved",data:data});
}
})
  
});

router.get('/getUser', function(req, res, next) {  //get call
 Consumer.find({}, (err,data)=>{
   if(err){
    res.status(404).json({msg:"no data saved",err:err});
   }else{
    res.status(404).json({msg:"user record",data:data});
   }
 }) 
});

module.exports = router;
