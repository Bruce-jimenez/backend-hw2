const express = require('express');
// const magic = require('./app/magic')
const app = express();


app.get('/greeting', (req, res) => res.send('Hello, stranger'));
app.get('/greeting/:name', (req, res) => res.send('<h1>"What is up <name>. It is so great to see you."</h1>'));

//Tips
app.get('/tip/:total/:percent', (req, res) => {
    res.send(`<h2> Your total is ${req.params.total}. Your tip should be ${req.params.total * (req.params.percent /100)}. `)
})

const responseMagic = () => {
    let response = ["It is certain",
     "It is decidedly so",
      "Without a doubt",
       "Yes definitely",
       "You may rely on it",
        "As I see it yes",
         "Most likely",
          "Outlook good",
          "Yes",
           "Signs point to yes",
            "Reply hazy try again",
             "Ask again later",
             "Better not tell you now",
              "Cannot predict now",
               "Concentrate and ask again",
               "Don't count on it",
                "My reply is no",
                "My sources say no",
                "Outlook not so good",
                "Very doubtful"];
return response[Math.floor(Math.random() * response.length)];
}
//Tried to make the function in another file (failed due the connection from the function to file to the get function)

app.get('/magic/:question', (req, res) => {
    let question = req.params.question;
    question = question.split('%20');
    question = question.join(' ');
res.send(`<h1>${question} </br></br> ${responseMagic()}</h1>`)
})



app.listen(3000, () => {
    console.log('Tuned to port 3000.')
});