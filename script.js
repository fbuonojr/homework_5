// set time at top of page
var currentDay = moment().format('dddd , MMMM Do');
$("#currentDay").text(currentDay);

//save button to save text to local storage
$(".save-button").on("click", function(){
    var hourlyEvent = document.getElementById("inputEvent").value;
    localStorage.setItem("Hourly Event", hourlyEvent);
    console.log(hourlyEvent);
});

// color coded timeblocks by past (success), present(warning), or future(primary) 
// moment.isBefore(), moment.isSame(), moment.isAfter()
var currentHour = moment().format('h');
console.log(currentHour)
var timeIndex = 9;
var changeColor = function(){
    for(var i = 0; i < 8; i++){
        if(timeIndex === 12){
            timeIndex = 0;
        }
        if($("#time-" + timeIndex).attr("class") = "AM"){
            if($("#time-" + timeIndex).attr("value") = currentHour){

            }
        }
        
        timeIndex++;
        console.log(timeIndex);
    }
}
console.log($("#time-5").attr("class"));