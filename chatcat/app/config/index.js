'use strict';

if (process.env.NODE_ENV === 'production') {
    //offer production stage env variables
    module.exports = {
        host: process.env.host || "",
        dbURI: process.env.dbURI,
        sessionSecret: process.env.sessionSecret,
        "fb":{
            "clientID": process.env.fbClientID,
            "clientSecret": process.env.fbClientSecret,
            "callbackURL": process.env.host+ "/auth/facebook/callback",
            "profileFields": ["id", "displayName", "photos"]
        }
    }
} else {
    // offer dev stage settings and data
    module.exports = require('./development.json');
}


/*332468259492998
da936b81060178e79431608af90c43de
chatcat*/