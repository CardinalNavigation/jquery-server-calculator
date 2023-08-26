$(document).ready(onReady);


function onReady() {
    console.log("Client side javascript works!");
    $('#addition').on('click', packageInput)
    $('#addition').on('click', additiontoTrue)
    // $('#subtraction').on('click', packageInput)
    // $('#multiplication').on('click', packageInput)
    // $('#division').on('click', packageInput)
    $('#equalSign').on('click', packageInput)
    // $('#clear').on('click', packageInput)

}


function packageInput(event) {
    event.preventDefault();
    console.log("button working")
    let input1 = $("#input1").val()
    let input2 = $("#input1").val()

    let addition = false;
   
    let combinedInputObject = {
        input1: Number(input1),
        input2: Number(input2),
        addition: false,
        subtraction: false,
        multiplication: false,
        division: false,
    }
    console.log(combinedInputObject)
    // What do i want to happen when the addition button is pressed?
}


