const express = require('express');
const app = express();
const port = 3000;//control the port location



app.get('/greeting', (req, res) => {
    res.send("Hello, stranger")

});

app.get('/greeting/:name', (req, res) => {
    res.send("Hello, " + req.params.name + " thanks for stopping by!" );

});

app.get('/tip/:total/:tipPercentage',(req,res)=>{
    let totalTip = (parseInt(req.params.total)* (parseInt(req.params.tipPercentage)/100))
    res.send("The tip is $" + totalTip);
});

app.listen(port,() => {
    console.log('listening on port' , port);
});