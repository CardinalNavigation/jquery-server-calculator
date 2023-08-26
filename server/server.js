const data = require('./modules/data.js');

const express = require('express');
let bodyParser = require('body-parser');
const app = express();
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));


let calculationHistory = []
console.log(calculationHistory);



app.post('/calculation', (req, res) => {
    console.log('in /messages POST:', req.body);
    let playerGuessesArray = req.body;
    console.log(playerGuessesArray.addition);
    console.log(typeof playerGuessesArray.addition)
    console.log(playerGuessesArray.input1);
    console.log(playerGuessesArray.input2);
    // console.log(typeof playerGuessesArray.input1)
    let sumOfInput = 0;
    if (playerGuessesArray.addition === "true") {
        sumOfInput = Number(playerGuessesArray.input1) + Number(playerGuessesArray.input2)
        console.log(sumOfInput);
        calculationHistory.push(sumOfInput);
    }
    // calculationHistory.push();
    res.sendStatus(201); // send an HTTP response to the client
});




// Routes to here
app.listen(5000, function () {
    console.log(`You started the server! It is running on port 5000.`);
})