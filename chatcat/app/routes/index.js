'use strict';

const passport = require('passport');
const h = require('../helpers')

module.exports = () => {
    let routes ={
        'get':{
            '/':(req, res, next) => {
                res.render('login');
            },
            '/rooms':(req, res, next)=>{
                res.render('rooms', {
                    user: req.user
                });
            },
            '/chat':(req, res, next)=>{
                res.render('chatroom');
            },
            '/auth/facebook': passport.authenticate('facebook'),
            '/auth/facebook/callback': passport.authenticate('facebook', {
                successRedirect: '/rooms',
                failureRedirect:'/'
            })
        },
        'post':{

        },
        'NA':(req, res, next)=>{
            res.status(404).sendFile(process.cwd()+'/views/404.htm');
        }
    }

    
    //registerRoutes(routes);
    return h.route(routes);
}