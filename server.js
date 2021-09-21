const express = require('express');
const app = express();
const port = 3000;//control the port location



app.get('/greeting', (req, res) => {
    res.send("Hello, stranger")

});

app.get('/greeting/:name', (req, res) => {
    res.send("Hello, " + req.params.name + " thanks for stopping by!" );

});

app.listen(port,() => {
    console.log('listening on port' , port);
});