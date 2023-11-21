'use strict';
const passport = require('passport');
const config = require('../config');
const h = require('../helpers');
const FacebookStrategy = require('passport-facebook').Strategy;


module.exports = () => {

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        //Find the user using the _id
        h.findById(id)
            .then(user => done(null, user))
            .catch(error => console.log('error when deserializing the user'));
    });

    let authoProcessor = (accessToken, regreshToken, profile, done) => {
        //Find a use in the local db using profile.id
        //if the use is found, return the user data using the done()
        //if the use is not found , create one in the local db and return

        h.findOne(profile.id)
            .then(result => {
                if (result) {
                    done(null, result);
                } else {
                    h.createNewUser(profile)
                        .then(newChatUser => (null, newChatUser))
                        .catch(error => console.log('Error when creating new user'));
                }
            })
    };

    passport.use(new FacebookStrategy(config.fb, authoProcessor));
}