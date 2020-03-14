

function currentDate() {
    // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
    var time = moment().format('MMMM Do YYYY, h:mm a')
    $("#today").text(time)
    var updateTime = setTimeout(currentDate, 60000)
}
currentDate()

loadPlanner();

// rowColor function highlights the current hour and greys out past hours
function rowColor() {
    var currentHour = moment().format('hA'); //refrencing moment.js library to retrieve the hr and am/pm

    if (currentHour.charAt(currentHour.length - 2) === "P") { //check if it's pm
        var tempHour = currentHour.split("P"); //grabs the number value only whehn PM

        currentHour = parseInt(tempHour[0]) + 12 //convert to military time
    } else {
        currentHour = currentHour.split("A")[0] // grabs the number value only when AM
    }

    $(`#${currentHour}`).css("background-color", "yellow")

    // for loops through 9-5 (military time)
    for (let i = 9; i < 18; i++) {
        if (i < currentHour) { // if past current hr
            $(`#${i}`).css("background-color", "rgba(20,20,20,.3)") // apply grey color
        }

    }
}


function loadPlanner() {
    rowColor();


    $("#9am").val(localStorage.nine);
    $("#10am").val(localStorage.ten);
    $("#11am").val(localStorage.eleven);
    $("#12pm").val(localStorage.twelve);
    $("#1pm").val(localStorage.one);
    $("#2pm").val(localStorage.two);
    $("#3pm").val(localStorage.three);
    $("#4pm").val(localStorage.four);
    $("#5pm").val(localStorage.five);
}
$("#save").on("click", function (event) {
    var userInput = $("#9am").val().trim();
    localStorage.setItem("nine", userInput); // console.log(localStorage); 
    localStorage.getItem("nine"); // console.log(localStorage.getItem("nine"));

    var userInput = $("#10am").val().trim();
    localStorage.setItem("ten", userInput);
    localStorage.getItem("ten");

    var userInput = $("#11am").val().trim();
    localStorage.setItem("eleven", userInput);
    localStorage.getItem("eleven");

    var userInput = $("#12pm").val().trim();
    localStorage.setItem("twelve", userInput);
    localStorage.getItem("twelve");

    var userInput = $("#1pm").val().trim();
    localStorage.setItem("one", userInput);
    localStorage.getItem("one");

    var userInput = $("#2pm").val().trim();
    localStorage.setItem("two", userInput);
    localStorage.getItem("two");

    var userInput = $("#3pm").val().trim();
    localStorage.setItem("three", userInput);
    localStorage.getItem("three");

    var userInput = $("#4pm").val().trim();
    localStorage.setItem("four", userInput);
    localStorage.getItem("four");

    var userInput = $("#5pm").val().trim();
    localStorage.setItem("five", userInput);
    localStorage.getItem("five");
});

