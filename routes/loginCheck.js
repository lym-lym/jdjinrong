/**
 * Created by Administrator on 2018/1/8.
 */
var express = require('express');
var router = express.Router();
var userinfosdb = require("../db/userinfosdb")

/* GET home page. */
router.post('/', function(req, res, next) {
    //1、 接受前端的数据
    let username = req.body.username;
    let userpass = req.body.userpass;


    //2 、 链接数据库
    userinfosdb.find({"username":username,"userpass":userpass},function(isSuccess){
        if(isSuccess){
            //3、给前端响应
            //res.send("注册成功！");
            res.send("<script>alert('登录成功');location.href='index.html';</script>");
        }else{
            //保存cookie

            //跳转到首页
            res.redirect("index.html")
        }
    });

});

module.exports = router;
