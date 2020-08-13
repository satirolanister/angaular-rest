const express = require('express');
const path = require('path');
const exphbs= require('express-handlebars');
const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');


const app = express();
require('./config/config');

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs'
}));
app.set('view engine','.hbs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req, res, next) =>{
    res.locals.errormsg = req.flash('errormsg');
    res.locals.sucessmsg = req.flash('sucessmsg');
    next();
})


app.use(require('./routes/indexRou'));
app.use(require('./routes/userRoute'));
app.use(require('./routes/shop'));


app.use(express.static(path.join(__dirname,'public')));

module.exports = app;