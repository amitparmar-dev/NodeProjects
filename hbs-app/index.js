const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const publicPath = path.join(__dirname,'/public')
const viewsPath = path.join(__dirname,'./template/views')
const partialsPath = path.join(__dirname, './template/partials')

app.set('view engine', 'hbs'); //set your handlebar..
app.set('views', viewsPath);
app.use(express.json());
app.use(express.urlencoded({extended:true}))
hbs.registerPartials(partialsPath);
// hbs.registerHelper('noop', function(options){
    
//     return (options.fn(this));
// });

app.use(express.static(publicPath));

//views for a route 
app.get('/', (req, res)=>{
    // res.send('<h1> Home Page</h1>')
    let temp = 25;
    res.render('index', {temp: temp})
})

app.get('/login',(req, res)=>{
    res.render('login')
})

// app.post('/login',(req, res)=>{
//     res.send(`<h1> Welcome to ${req.body.username} </h1>`)
// })
app.post('/home',(req, res)=>{
    res.send(`<h1> Welcome to ${req.body.username} </h1>`)
})


app.get('/about', (req, res)=>{
  //  res.send('<h1> About Page</h1>')
  res.render('about', { page : 'About Me Page'})
})


app.listen(4000, ()=>{
    console.log('Server is up and running on 4000');
})