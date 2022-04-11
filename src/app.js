//hoja de creacion del server con express
const express = require('express');
const engine = require('ejs-mate') 
const path = require('path')
const morgan = require('morgan')

const app = express();

//settings
app.set('views', path.join(__dirname,'views'))
app.engine('ejs',engine)
app.set('view engine','ejs')
app.set('port', process.env.PORT || 5000);


//middlewares
app.use(express.json());
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))

//router
app.use('/login/', require('./routes/Login'))

module.exports= app;