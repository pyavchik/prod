const express = require('express'),
    passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
//passport.use(new GoogleStrategy());
passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://www.example.com/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));

app.get('/', (req, res) => {
    res.send({hi: 'there!'});
});

app.get('/hi', (req, res) => {
    res.send({hi: 'there!'});
});

app.get('/bye', (req, res) => {
    res.send({bye: 'body!'});
});

const PORT  = process.env.PORT || 5000;
app.listen(PORT);
