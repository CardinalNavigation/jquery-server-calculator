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


function getMessages() {
    $.ajax({
        method: 'GET',
        url: '/calculation'
    })  // Ajax sends an HTTP Request to the server
        // Then it waits for: the HTTP Response
        // When it gets an HTTP Response, it Checks to see if the response code is good!
        // 'Good' = starts with 2.
        // 'Bad' = starts with a 4, or a 5
        // Starts with a 3?   Google it!
        // If it's bad, go to .catch
        // If it's good, go to .then
        .then(function (response) {
            let answerHistory = response;
            let answerItem = answerHistory.pop()
            console.log(answerItem)
            render(answerItem);
        }).catch(function (err) {
            alert('Unable to get messages. Try again later.');
            console.log(err);
        })
}



function render(answerItem) {
    let el = $('#answerField');
    el.empty();
    console.log("May Answer Looks Like", answerItem)
    el.append(`
                <h3="answerObject">
                 ${answerItem}
                </h3>
                `
    );
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
    let input2 = $("#input2").val()
    let combinedInputObject = {
        input1: Number(input1),
        input2: Number(input2),
        addition: addition,
        subtraction: subtraction,
        multiplication: multiplication,
        division: division,
    }
    console.log(combinedInputObject)

    $.ajax({
        method: 'POST',
        url: '/calculation',
        data: combinedInputObject
    }).then(function (response) {
        // $('#nameIn').val('');
        // $('#messageIn').val('');
        getMessages();
    }).catch(function (err) {
        alert('Error sending message. Try again later.');
        console.log(err);
    })
}




