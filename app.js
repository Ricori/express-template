const express = require('express');
const fs = require('fs');

var app = express();

//静态访问页面设置
app.use(express.static('public'));

//自动加载routes文件夹所有路由文件
var file = fs.readdirSync('./routes');
for(var i in file){
    var name = file[i].replace('.js','');
    app.use('/' + name, require('./routes/' + name));
};

app.use('/',require('./routes/index'))

var server = app.listen(8888,function(){
    console.log("Server has started!");
});
