var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('Hello');
});
app.listen(process.env.PORT ||'3000');

var expressHbs =require('express-handlebars');
app.engine(".hbs", expressHbs.engine({ extname: ".hbs", defaultLayout: null }));
app.set('view engine','.hbs');



app.get('/baitap', function(req, res){
    res.render('home');
});
