// my attempt at javascript using tables in html
// // set time at top of page
// var currentDay = moment().format('dddd , MMMM Do');
// $("#currentDay").text(currentDay);

// // color coded timeblocks by past (success), present(warning), or future(primary) 
// // moment.isBefore(), moment.isSame(), moment.isAfter()
// var currentHour = moment().format('h');
// console.log(currentHour)
// var timeIndex = 9;
// var changeColor = function(){
//     for(var i = 0; i < 8; i++){
//         if(timeIndex === 12){
//             timeIndex = 0;
//         }
//         if($("#time-" + timeIndex).attr("class") = "AM"){
//             if($("#time-" + timeIndex).attr("value") = currentHour){

//             }
//         }
//         timeIndex++;
//         console.log(timeIndex);
//     }
// }
// console.log($("#time-5").attr("class"));

// $(document).ready(function(){
//     //save button to save text to local storage
//     $(".save-button-9").on("click", function(){
//         var nineEvent = document.getElementById("input-9").value;
//         localStorage.setItem("Nine Event", nineEvent);
//     });

//     $(".save-button-10").on("click", function(){
//         var tenEvent = document.getElementById("input-10").value;
//         localStorage.setItem("Ten Event", tenEvent);
//     });

//     $(".save-button-11").on("click", function(){
//         var elevenEvent = document.getElementById("input-11").value;
//         localStorage.setItem("Eleven Event", elevenEvent);
//     });

//     $(".save-button-12").on("click", function(){
//         var twelveEvent = document.getElementById("input-12").value;
//         localStorage.setItem("Twelve Event", twelveEvent);
//     });

//     $(".save-button-1").on("click", function(){
//         var oneEvent = document.getElementById("input-1").value;
//         localStorage.setItem("One Event", oneEvent);
//     });

//     $(".save-button-2").on("click", function(){
//         var twoEvent = document.getElementById("input-2").value;
//         localStorage.setItem("Two Event", twoEvent);
//     });

//     $(".save-button-3").on("click", function(){
//         var threeEvent = document.getElementById("input-3").value;
//         localStorage.setItem("Three Event", threeEvent);
//     });

//     $(".save-button-4").on("click", function(){
//         var fourEvent = document.getElementById("input-4").value;
//         localStorage.setItem("Four Event", fourEvent);
//     });

//     $(".save-button-5").on("click", function(){
//         var fiveEvent = document.getElementById("input-5").value;
//         localStorage.setItem("Five Event", fiveEvent);
//     });
   
// });

// second attempt at javascript from after TA Manoli's review session
$(document).ready(function(){
    //display time on top of page
    var todaysDate = moment().format("MMMM Do YYYY");
    $("#currentDay").text(todaysDate);

    //save button event to save input
    $("saveBtn").on("click", function(){
        var value = $(this).siblings(".textSiblings").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });

    $("#time-9 .textSiblings").val(localStorage.getItem("time-9"));
    $("#time-10.textSiblings").val(localStorage.getItem("time-9"));
    $("#time-11 .textSiblings").val(localStorage.getItem("time-9"));
    $("#time-12 .textSiblings").val(localStorage.getItem("time-9"));
    $("#time-1 .textSiblings").val(localStorage.getItem("time-9"));
    $("#time-2 .textSiblings").val(localStorage.getItem("time-9"));
    $("#time-3 .textSiblings").val(localStorage.getItem("time-9"));
    $("#time-4 .textSiblings").val(localStorage.getItem("time-9"));
    $("#time-5 .textSiblings").val(localStorage.getItem("time-9"));

});