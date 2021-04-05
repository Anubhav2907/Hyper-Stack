
const express = require('express')
const app = express();
const path = require('path');
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));
app.get('/', function(req, res){
    res.render('home')
})
app.get('/about',function(req,res){
    res.render('about')
})
app.get('/faculty',function(req,res){
    res.render('faculty')
})
app.get('/staff',function(req,res){
    res.render('staff')
})
app.get('/students',function(req,res){
    res.render('students')
})
app.get('/phd',function(req,res){
    res.render('phd')
})
app.get('/Research',function(req,res){
    res.render('research')
})

app.listen(3000, function(){
    console.log('On port 3000!!!');
})