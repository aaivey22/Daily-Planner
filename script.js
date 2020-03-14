


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
$("#save9").on("click", function (event) {
    var userInput = $("#9am").val().trim();
    localStorage.setItem("nine", userInput); // console.log(localStorage); 
});
localStorage.getItem("nine"); // console.log(localStorage.getItem("nine"));


// function loadPlanner() {
//     $("#10am").val(localStorage.ten);
// }
// $("#save10").on("click", function (event) {
//     var userInput = $("#10am").val().trim();
//     localStorage.setItem("ten", userInput);
// });
// localStorage.getItem("ten");