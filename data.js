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
const addItems = [
    {
        title: "Special Manpower Development Programme for chips to System Design (SMDP-C2SD) Sanction Order: 9(1)/2014-MDD, Date: 04/02/2015",
        agency: "DEIT, MCIT, GoI, New Delhi",
        date: '06/02/2015',
        amount: 4364000.00,
        coordinator: 'Dr. A. D. Darji, Mr. P. J. Engineer'
    },
    {
        title: "Study, Design and Simulation of Iono Delay Effects Based On Lonospheric Models & Their Correction Techniques Using Software Define Radio Project ID: NGP-8, Date: January, 23, 2017",
        agency: "SAC, ISRO, Ahmedabad",
        date: '23/01/2017',
        amount: 1890000.00,
        coordinator: 'Dr. S. N. Shah'
    },
    {
        title: "SIRMI – Strengthening IRNSS receiver by mitigation of Interference Sanction Order: ISRO/RES/3/752/17-18, Date: 13/09/2017",
        agency: "ISRO, Bengaluru",
        date: '13/09/2017',
        amount: 3121000.00,
        coordinator: '	Dr. U. D. Dalal, Dr. S. N. Shah'
    }
]
Product.insertMany(addItems)
    .then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.log(err)
    })