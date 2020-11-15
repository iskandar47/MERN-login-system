const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const User = require("./models/user.js");

const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies){
        token = req.cookies["access_token"];
    }
    return token
}

// Authaurization
passport.use( new JwtStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey : "CodeWarrior"
}, (payload, done) => {
    User.findById({_id : payload.sub}, (err, user) => {
        if (err)
            return done(err, false)
        if (user)
            return done(null, user)
        else 
            return done(null, false)
    });
}));

// Authentication 
passport.use( new LocalStrategy((username, password, done)=> {
    User.findOne({username}, (err, user) => {
        // somthing went wrong
        if (err)
            done(err);
        // user doesn't exist
        if (!user)
            return done(null, false);
        // check if password match
        user.comparePassword(password, done)
    })
}))