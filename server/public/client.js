$(document).ready(onReady);


function onReady() {
    console.log("Client side javascript works!");
    $('#addition').on('click', additionToTrue)
    // $('#subtraction').on('click', packageInput)
    // $('#multiplication').on('click', packageInput)
    // $('#division').on('click', packageInput)
    $('#equalSign').on('click', packageInput)
    // $('#clear').on('click', packageInput)

}

let addition = false;
let subtraction = false;
let multiplication = false;
let division = false;

function additionToTrue() {
    event.preventDefault();
    addition = !addition;
    console.log("Addition is now:", addition)
}

function packageInput(event) {
    event.preventDefault();
    console.log("button working")
    let input1 = $("#input1").val()
    let input2 = $("#input1").val()
    let combinedInputObject = {
        input1: Number(input1),
        input2: Number(input2),
        addition: addition,
        subtraction: subtraction,
        multiplication: multiplication,
        division: division,
    }
    console.log(combinedInputObject)
    // What do i want to happen when the addition button is pressed?
}


