
var hourContent = [""];

function currentDate() {
    // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
    var time = moment().format('MMMM Do YYYY, h:mm:ss a')
    $("#today").text(time)
}

currentDate()


$(".save").on("click", function (event) {
    // event.preventDefault();

    var userInput = $("#9am").val().trim();
    // hourContent.push(userInput); console log works, but this does not?

    // console.log(userInput);
});
