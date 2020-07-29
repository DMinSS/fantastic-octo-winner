const {add, minus} = require('./module');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({extended: false}));

app.use(bodyparser.json());

app.use(express.static('public'));

app.get('/user/:user_name', (req, res, next) => {
    res.status(200).end(`Hello, ${req.params.user_name}`);
});

app.post('/comments', (req, res, next) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(req.body, null, 2));
});

app.post('/form', (req, res, next) => {
    console.log(JSON.stringify(req.body, null, 4));
    res.redirect('/');
})

app.listen(PORT);