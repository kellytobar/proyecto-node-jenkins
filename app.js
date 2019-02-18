var express= require('express');
var app= express();

app.get('/', function (req, res){
res.send('proyecto node');
});

app.listen(3000,function(){
console.log('esta app corre en el puerto 3000');
});
