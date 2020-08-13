const pass =require('passport');
const local = require('passport-local').Strategy;
const user = require('../models/users');


pass.use(new local({
    usernameField:'email',
    passwordField:'pass'
},async (email, password, done)=> {
    const user = await user.findOne({email})
    if(!user){
        return done(null, false, {message: 'usuario no encontrado'});
    } else{
        const match = await user.match(password);
        if(match) {
            return done(null, user);
        } else {
            return done(null, false, {message: 'contraseña incorrecta'})
        }
    }
}));

pass.serializeUser((user, done) =>{
    done(null, user.id);
});

pass.deserializeUser((id, done)=>{
    user.findById(id, (err, user) => {
        done(err,user)
    })
});