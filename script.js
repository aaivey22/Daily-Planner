


function currentDate() {
    // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
    var time = moment().format('MMMM Do YYYY, h:mm:ss a')
    $("#today").text(time)
}

currentDate()

loadPlanner();

function loadPlanner() {
    $("#9am").val(localStorage.nine);
}

$(".save").on("click", function (event) {
    // event.preventDefault();

    var userInput = $("#9am").val().trim();
localStorage.setItem("nine", userInput);

    // console.log(localStorage);
});
console.log(localStorage.getItem("nine"));
// localStorage.getItem("9");