// displays current date and time, I had no clue how to update in real time, will ask prof about that
let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
let timeNow = moment().format("h:mm:ss");
$("#timeNow").text(timeNow);


function trackTime() {
  let currentTime = moment().hour();
// this will go through every time block and then loop it
  $(".time-block").each(function () {
    let textTime = parseInt($(this).attr("id").split("hour")[1]);

// Depending on the time of day, if it is passed the time it will remove the class present and add past, if it is a time in the future - the class will be set to future if it is the current time it will add a present class and remove the future class
    if (textTime < currentTime) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    } else if (textTime == currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}
trackTime();

// adds the save button on click and then will store in local storage and display it on the block with the get items
$(".saveBtn").on("click", function () {
  console.log(this);
  let text = $(this).siblings(".description").val();
  let time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
