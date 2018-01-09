/**
 * Created by Administrator on 2018/1/8.
 */
var express = require('express');
var router = express.Router();
var userinfosdb = require("../db/userinfosdb");

/* POST users listing. */
router.post('/', function(req, res, next) {
    //1、接收前端传来的数据
    var username = req.body.username;
    var userpass = req.body.userpass;
    console.log(req.body.username);
    console.log(req.body.userpass);

    //2、链接数据库（判断，保存）
    userinfosdb.reg({"username":username,"userpass":userpass},function(isSuccess){
        
        if(isSuccess){
            //3、给前端响应
            //res.send("注册成功！");
            res.send("<script>alert('注册成功');location.href='login.html';</script>");
        }else{
            res.send("<script>alert('亲，用户名已经存在，请重新选择！');location.href='reg.html';</script>");
        }
    });

});

module.exports = router;
