/**
 * Created by Administrator on 2017/12/26.
 */

//��ģ���Ǵ������ݿ�����
const mongoose = require("mongoose");

module.exports = function(){
    return mongoose.createConnection("localhost","zhanghongyuan1707");
}
