const express = require('express');
const route = express.Router()
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const verification = require('./jwtVerification');

dotenv.config()
const signed = jwt.sign('persondid', process.env.WEB_TOKEN)

route.get('/', verification ,(req,res)=>{
    res.status(200)
    .header('Authorization','JWT TOKEN')
    .cookie('person id', signed)
    .json({  name:'ibrahim Badmus Abdulfatah',
            age:27,
            Gender:'Male',
            College:'Bayero University Kano',
            RegNo:'AGR/13/AGR/00399'

    })
    res.end;
})
module.exports = route;