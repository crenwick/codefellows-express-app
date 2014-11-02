/*jshint node: true*/
'use strict';
var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.get( '404', function ( req, res ) {
    res.redirect('/404.html');
});

app.get( '*', function ( req, res ) {
    res.redirect('/contact.html');
});

app.listen(process.env.PORT || 3000);
