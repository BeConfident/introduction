var express = require('express');
var path=require("path");
var router = express.Router();
var data = require(path.join(__dirname,"../data.json"));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
});
router.get("/blog",function(req,res){
    res.setHeader('Access-Control-Allow-Origin', "*"); //针对哪个域名可以访问，*表示所有
    res.setHeader('Access-Control-Allow-Credentials', true); //是否可以携带cookie
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.json(data);
});
module.exports = router;
