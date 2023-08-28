const data = require('./modules/data.js');

const express = require('express');
let bodyParser = require('body-parser');
const app = express();
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;

let answerHistory = [];
let calculationHistory = []
// console.log(answerHistory)
// console.log(calculationHistory)


app.get('/calculation', (req, res) => {
    // console.log('in /messages GET');
    res.send(answerHistory); // send an HTTP response to the client
});

app.get('/calcHistory', (req, res) => {
    // console.log('in /messages GET');
    res.send(calculationHistory); // send an HTTP response to the client
});

app.post('/calculation', (req, res) => {
    // console.log('in /messages POST:', req.body);
    let calculatorInput = req.body;
    let calculationResult = 0;
    let calculationString
    if (calculatorInput.addition === "true") {
        calculationResult = Number(calculatorInput.input1) + Number(calculatorInput.input2)
        calculationString = ` ${calculatorInput.input1} + ${calculatorInput.input2} = ${calculationResult} `
        console.log(calculationString);
        calculationHistory.push(calculationString)
        answerHistory.push(calculationResult);
    }
    if (calculatorInput.subtraction === "true") {
        calculationResult = Number(calculatorInput.input1) - Number(calculatorInput.input2)
        calculationString = ` ${calculatorInput.input1} - ${calculatorInput.input2} = ${calculationResult} `
        console.log(calculationString);
        calculationHistory.push(calculationString)
        answerHistory.push(calculationResult);
    }
    if (calculatorInput.multiplication === "true") {
        calculationResult = Number(calculatorInput.input1) * Number(calculatorInput.input2)
        calculationString = ` ${calculatorInput.input1} * ${calculatorInput.input2} = ${calculationResult} `
        console.log(calculationString);
        calculationHistory.push(calculationString)
        answerHistory.push(calculationResult);
    }
    if (calculatorInput.division === "true") {
        calculationResult = Number(calculatorInput.input1) / Number(calculatorInput.input2)
        calculationString = ` ${calculatorInput.input1} * ${calculatorInput.input2} = ${calculationResult} `
        console.log(calculationString);
        calculationHistory.push(calculationString)
        answerHistory.push(calculationResult);
    }
    res.sendStatus(201); // send an HTTP response to the client
});



// Routes to here
app.listen(PORT, function () {
    console.log(`Running on port 5000.`);
})