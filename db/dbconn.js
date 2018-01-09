/**
 * Created by Administrator on 2017/12/26.
 */

//此模块是创建数据库链接
const mongoose = require("mongoose");

module.exports = function(){
    return mongoose.createConnection("localhost","zhanghongyuan1707");
}
