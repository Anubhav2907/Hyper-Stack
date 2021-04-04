
const express = require('express')
const app = express();
const path = require('path');
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));
const mongoose = require('mongoose');
const Product = require('./model/sponsoredProj');
mongoose.connect('mongodb://localhost:27017/Sponsored', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


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
    const products = await Product.find({});
    res.render('sponsored', {products})
})
app.get('/CurrentProjects', function(req,res){
    res.render('current')
})
app.listen(3000, function(){
    console.log('On port 3000!!!');
})