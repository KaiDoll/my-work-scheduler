var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D"));

var timeBlock = $(".time-block"); //I hope this is the right one. YES it is the right one.
var currentHour = dayjs().hour(); //get current time hour


$(".time-block").each(function () {
  var timeBlock = $(this).attr("id").split("-")[1]; //This function changes the color of the scheduler according to the current time.
  // this refers to time-block take the id and split?

  if (currentHour == timeBlock) {
    $(this).addClass("present");
    $(this).children(".description").addClass("present"); //
    // if the current hour is EQUAL to that certain div with the current time than change it to present.
  } else if (currentHour > timeBlock) {
    $(this).removeClass("future");
    $(this).addClass("past");
    //if current hour is GREATER than the certain div with the time than it turns red.
  } else if (currentHour < timeBlock) {
    $(this).removeClass("present");
    $(this).addClass("future");
    //if current hour is LESS than the certain div with the time than it turns green.
  }
});

// timeBlock is equal to the class time-block in html file. It is a div that contains
// the row with time, text box, and save button.

$(".saveBtn").on("click", function () {
  var key = $(this).parent().attr("id");
  var value = $(this).siblings("textarea").val();

  localStorage.setItem(key, value);
});

for (var i = 9; i < 18; i++) {
  $("#hour-" + i + " textarea").val(localStorage.getItem("hour-" + i));
}

