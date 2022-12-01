const express = require('express');
const app = express();


app.get('/greeting', (req, res) => res.send('Hello, stranger'));
app.get('/greeting/:name', (req, res) => res.send('<h1>"What is up <name>. It is so great to see you."</h1>'));

//Tips
app.get('/tip/:total/:percent', (req, res) => {
    res.send(`<h2> Your total is ${req.params.total}. Your tip should be ${req.params.total * (req.params.percent /100)}. `)
}).





app.listen(3000, () => {
    console.log('Tuned to port 3000.')
});