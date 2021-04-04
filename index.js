const express = require('express')
const app = express();
const path = require('path');
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

app.get('/', function(req, res){
    res.render('home')
})

app.listen(3000, function(){
    console.log('On port 3000!!!');
})