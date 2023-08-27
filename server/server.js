const data = require('./modules/data.js');

const express = require('express');
let bodyParser = require('body-parser');
const app = express();
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));


let answerHistory = [];
console.log(answerHistory)


app.get('/calculation', (req, res) => {
    console.log('in /messages GET');
    res.send(answerHistory); // send an HTTP response to the client
});


app.post('/calculation', (req, res) => {
    console.log('in /messages POST:', req.body);
    let playerGuessesArray = req.body;
    // console.log(playerGuessesArray.addition);
    // console.log(typeof playerGuessesArray.addition)
    // console.log(playerGuessesArray.input1);
    // console.log(playerGuessesArray.input2);
    // console.log(typeof playerGuessesArray.input1)
    let sumOfInput = 0;
    if (playerGuessesArray.addition === "true") {
        sumOfInput = Number(playerGuessesArray.input1) + Number(playerGuessesArray.input2)
        // console.log(sumOfInput);
        answerHistory.push(sumOfInput);
    }
    if (playerGuessesArray.subtraction === "true") {
        sumOfInput = Number(playerGuessesArray.input1) - Number(playerGuessesArray.input2)
        // console.log(sumOfInput);
        answerHistory.push(sumOfInput);
    }
    if (playerGuessesArray.multiplication === "true") {
        sumOfInput = Number(playerGuessesArray.input1) * Number(playerGuessesArray.input2)
        // console.log(sumOfInput);
        answerHistory.push(sumOfInput);
    }
    if (playerGuessesArray.division === "true") {
        sumOfInput = Number(playerGuessesArray.input1) / Number(playerGuessesArray.input2)
        // console.log(sumOfInput);
        answerHistory.push(sumOfInput);
    }
    res.sendStatus(201); // send an HTTP response to the client
});



// Routes to here
app.listen(5000, function () {
    console.log(`Running on port 5000.`);
})