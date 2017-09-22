// const express=require("express");
const http = require("http");
const server = http.createServer((req,res) =>{

});
var Router = express.Router();
router.get("/idea",function(req,res,next){
    let msg = require("../static/js/send.js");
    res.json(msg);
});
modole.exports = router;