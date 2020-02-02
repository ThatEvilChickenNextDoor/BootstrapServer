var express = require('express')
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://master:b0HvluUuBiIh47Zz@node-auth-p0sk9.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
const bodyParser = require('body-parser');

var app = express()

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var collection;

client.connect(err => {collection = client.db("ANGEL").collection("devId");});

app.get('/', function(req, res){
    res.redirect('/register.html');
});

app.post('/addreq', (req,res) =>{
    console.log(req.body);
    collection.insertOne(req.body)
    res.sendStatus(200);
})

app.post('/delreq', function(req,res){
    collection.deleteOne(req.body)  
    res.sendStatus(200);
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
