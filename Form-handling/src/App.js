const { application } = require('express');
const express = require('express');
const {check, body, validationResult} = require('express-validator');
const hbs = require('hbs');


const App = express();

App.use(express.json()) // for parsing application/json
App.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

App.set('view engine', 'hbs');

App.get('/', (req, res)=>{
    res.render('index')
})

App.post('/register',
body('Email').custom((value)={
    
}),
body('password').not().isEmpty().isLength({min:5})
,(req,res)=>{
    const errors = validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }
    return res.render('register', { userName : req.body.Email})
})

App.listen(5000, ()=>console.log('Server is up and running on port 6000'))