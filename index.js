
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
app.get('/ResearchFacilities',function(req,res){
    res.render('facilities')
})
app.get('/SponsoredProjects', async (req,res)=>{
    res.render('sponsored')
})
app.get('/CurrentProjects', function(req,res){
    res.render('current')
})
app.listen(3000, function(){
    console.log('On port 3000!!!');
})