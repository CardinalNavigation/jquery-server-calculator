$(document).ready(onReady);


function onReady() {
    console.log("Client side javascript works!");
    $('#addition').on('click', additionToTrue)
    $('#subtraction').on('click', subtractionToTrue)
    $('#multiplication').on('click', multiplicationToTrue)
    $('#division').on('click', divisionToTrue)
    $('#equalSign').on('click', packageInput)
    // $('#clear').on('click', packageInput)

}


function getAnswers() {
    $.ajax({
        method: 'GET',
        url: '/calculation'
    }).then(function (response) {
        let answerHistory = response;
        let answerItem = answerHistory.pop()
        console.log(answerItem)
        render(answerItem);
    }).catch(function (err) {
        alert('Unable to get messages. Try again later.');
        console.log(err);
    })
}

function getHistory() {
    $.ajax({
        method: 'GET',
        url: '/calcHistory'
    }).then(function (response) {
        let calculationHistory = response;
        console.log(calculationHistory)
        renderHistory(calculationHistory);
    }).catch(function (err) {
        alert('Unable to get messages. Try again later.');
        console.log(err);
    })
}


function render(answerItem) {
    let answerElement = $('#answerField');
    answerElement.empty();
    console.log("May Answer Looks Like", answerItem)
    answerElement.append(`
                <h3="answerObject">
                 ${answerItem}
                </h3>
                `
    );

}

function renderHistory() {
    let historyElement = $('inputHistory');
    console.log("May History Looks Like", historyElement)
    historyElement.append(` 
        <li class="history-line>
        ${historyElement}
        </li>
    `)
}

let addition = false;
let subtraction = false;
let multiplication = false;
let division = false;

function additionToTrue() {
    event.preventDefault();
    addition = !addition;
    subtraction = false;
    multiplication = false;
    division = false;
    // console.log("Addition is now:", addition)
    // console.log("Subtraction is now:", subtraction)
    // console.log("Mutiplication is now:", multiplication)
    // console.log("Division is now;", division)
}

function subtractionToTrue() {
    event.preventDefault();
    addition = false;
    subtraction = !subtraction;
    multiplication = false;
    division = false;
    // console.log("Addition is now:", addition)
    // console.log("Subtraction is now:", subtraction)
    // console.log("Mutiplication is now:", multiplication)
    // console.log("Division is now;", division)
}

function multiplicationToTrue() {
    event.preventDefault();
    addition = false;
    subtraction = false;
    multiplication = !multiplication;
    division = false;
    // console.log("Addition is now:", addition)
    // console.log("Subtraction is now:", subtraction)
    // console.log("Mutiplication is now:", multiplication)
    // console.log("Division is now;", division)
}

function divisionToTrue() {
    event.preventDefault();
    addition = false;
    subtraction = false;
    multiplication = false;
    division = !division;
    // console.log("Addition is now:", addition)
    // console.log("Subtraction is now:", subtraction)
    // console.log("Mutiplication is now:", multiplication)
    // console.log("Division is now;", division)
}

function packageInput(event) {
    event.preventDefault();
    // console.log("button working")
    let input1 = $("#input1").val()
    let input2 = $("#input2").val()
    let combinedInputObject = {
        input1: Number(input1),
        input2: Number(input2),
        addition: addition,
        subtraction: subtraction,
        multiplication: multiplication,
        division: division,
    }
    // console.log(combinedInputObject)

    $.ajax({
        method: 'POST',
        url: '/calculation',
        data: combinedInputObject
    }).then(function (response) {
        getAnswers();
        getHistory();
    }).catch(function (err) {
        alert('Error sending message. Try again later.');
        console.log(err);
    })

    $('#input1').val('')
    $('#input2').val('')
    clearButtons()
}

function clearButtons() {
    addition = false;
    subtraction = false;
    multiplication = false;
    division = false;
    // console.log('did clear buttons work?')
    // console.log("Addition is now:", addition)
    // console.log("Subtraction is now:", subtraction)
    // console.log("Mutiplication is now:", multiplication)
    // console.log("Division is now;", division)
}


