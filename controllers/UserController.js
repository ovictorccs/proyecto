var mysql = require('mysql');

module.exports = {

    getSignUp : function(req, res, next){
        return res.render('users/signup');
    },

    postSignUp: function(req, res, next){
        

 var user = {
     email : req.body.email,
     nombre : req.body.nombre,
     password : req.body.password,
 };

 var config = require('../database/config');
 var db = mysql.createConnection(config);

 db.connect();

 db.query('INSERT INTO users SET ?', user, function(err, rows, fields){
     if(err) throw err;

     db.end();
 });       
        return;
    },

getSignIn: function(req, res, next){
    return res.render('users/signin');
}

};