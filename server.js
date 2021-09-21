const express = require('express');
const app = express();
const port = 3000;//control the port location

const response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

app.get('/greeting', (req, res) => {
    res.send("Hello, stranger")

});

app.get('/greeting/:name', (req, res) => {
    res.send("Hello, " + req.params.name + " thanks for stopping by!");

});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let totalTip = (parseInt(req.params.total) * (parseInt(req.params.tipPercentage) / 100))
    res.send("The tip is $" + totalTip);
});

app.get('/magic/:request', (req, res) => {
    const request = req.params.request

    //console.log(request)

    let answer = response[Math.floor(Math.random() * response.length)];

    //console.log(answer)

    res.send(`
        <html>
            <body>
                <h1>You asked ${request}, Magic Eight Ball says ${answer}</h1>
             </body>
        </html>
`)
});

app.listen(port, () => {
    console.log('listening on port', port);
});