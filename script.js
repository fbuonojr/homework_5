// set time at top of page
var currentDay = moment().format('dddd , MMMM Do');
$("#currentDay").text(currentDay);

//save button to save text to local storage
$(".save-button").on("click", function(){
    var hourlyevent = document.getElementById("inputEvent").value;
});

// color coded timeblocks by past (success), present(warning), or future(primary) 
// moment.isBefore(), moment.isSame(), moment.isAfter()
var currentHour = moment().format('h');

