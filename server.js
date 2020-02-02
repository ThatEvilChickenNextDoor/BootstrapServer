var express = require('express')
var app = express()

app.use(express.static(__dirname))

app.get('/', function(req, res){
    res.redirect('/register.html');
});

var server = app.listen(8080, ()=>{
    console.log('server is listening on port', server.address().port)
})
