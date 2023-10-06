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

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

$(".saveBtn").on("click", function () {
  var key = $(this).parent().attr("id");
  var value = $(this).siblings("textarea").val();

  localStorage.setItem(key, value);
});

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
for (var i = 9; i < 18; i++) {
  $("#hour-" + i + " textarea").val(localStorage.getItem("hour-" + i));
}


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

//
//
// TODO: Add code to display the current date in the header of the page.

// var duration = dayjs()
// console.log(duration)

// highscoresLink.addEventListener('click', createHighscoresList);
