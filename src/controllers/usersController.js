const userCtrl = {};

const passport = require('passport');

const user = require('../models/users');

userCtrl.renderSignupForm = (req, res) => {

    res.render('user/signup');

};

userCtrl.Signup = async (req, res) => {
    const {name, email, password, confirpass} = req.body;
    const errors = [];
    if (password != confirpass){
        errors.push({text: 'contraseña no coincide'});
    }
    if(password.length < 4) {
        errors.push({text: 'contraseña debe ser mayor a 4 caracteres'});
    }
    if(errors.length > 0) {
        res.render('user/signup',{
            errors,
            name,
            email
        })
    } else {
       const emailUser = await user.findOne({email:email});
       if(emailUser) {
           req.flash('errormsg', 'Correo ya esta registrado');
           res.redirect('/signup');
       } else {
           const newUser = new user({name, email, password});
           newUser.password = await newUser.pass(password);
           await newUser.save();
           req.flash('sucessmsg','registro satisfactorio');
           res.redirect('/signin');
       }
    }
};

userCtrl.rendersigninForm = (req, res) => {
    res.render('user/signin');
};

userCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/signin',
    successRedirect: '/',
    failureFlash: true
});

userCtrl.logout = (req, res) => {
    res.send('se cerro la sesion')
}



module.exports = userCtrl; 