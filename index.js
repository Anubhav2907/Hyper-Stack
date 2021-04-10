
const express = require('express')
const app = express();
const path = require('path');
const details = [
    {
        name: 'Anubhav Singh',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloremque placeat laboriosam neque, illum repudiandae, iste cupiditate, vero minus earum sunt ex consequuntur voluptatum ratione laborum porro accusamus ea eveniet?',
        github: 'https://github.com/Anubhav2907',
        linkedin: 'https://www.linkedin.com/in/anubhav-singh-jadoun-2689621b3/'
    },
    {
        name: 'Arnav Adhiya',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloremque placeat laboriosam neque, illum repudiandae, iste cupiditate, vero minus earum sunt ex consequuntur voluptatum ratione laborum porro accusamus ea eveniet?',
        github: 'https://github.com/Arnav02',
        linkedin: 'https://www.linkedin.com/in/arnav-adhiya-b241a717a/'
    },
    {
        name: 'Anubhav Singh',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloremque placeat laboriosam neque, illum repudiandae, iste cupiditate, vero minus earum sunt ex consequuntur voluptatum ratione laborum porro accusamus ea eveniet?',
        github: 'https://github.com/mairalvinit',
        linkedin: 'https://www.linkedin.com/in/vinitmairal/'
    }
]
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.get('/', function (req, res) {
    res.render('home')
})
app.get('/about', function (req, res) {
    res.render('about')
})
app.get('/faculty', function (req, res) {
    res.render('faculty')
})
app.get('/staff', function (req, res) {
    res.render('staff')
})
app.get('/students', function (req, res) {
    res.render('students')
})
app.get('/phd', function (req, res) {
    res.render('phd')
})
app.get('/Research', function (req, res) {
    res.render('research')
})
app.get('/about/anubhav', function (req, res) {
    res.render('anx', {details})
})
app.get('/about/arnav', function (req, res) {
    res.render('arnav', {details})
})
app.get('/about/vinit', function (req, res) {
    res.render('vinit', {details})
})
app.listen(3000, function () {
    console.log('On port 3000!!!');
})