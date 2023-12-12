0// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function (){
  //1.) Displays Current Date
  function displayDate() {
    var today = dayjs();
    $("#currentDay").text(today.format("MMM D, YYYY h:mm A"));
  };
  
  // 2.) Add Event to Calendar by storing it locally
  function addToCalendar(event){
  
  };
  // 3.) Change class of divs comparing them to the current hour. 
  function changeContainer(){

    var hour = dayjs().format("H");

    console.log(hour);

    var test = $(".currentHour").text();

    console.log(test);

   $(".time-block").each(function(){
     var hourEl = $(this).attr("data-hour");
     if (hourEl < hour){
      $(".time-block").removeClass("past");
      $(".time-block").removeClass("present");
      $(".time-block").addClass("future");
     } else if (hourEl === hour){
      $(".time-block").removeClass("past");
      $(".time-block").removeClass("future");
      $(".time-block").addClass("present");
     } else if(hourEl > hour) {
      $(".time-block").removeClass("future");
      $(".time-block").removeClass("present");
      $(".time-block").addClass("past");
     }
   }) 
  };

  $(function runPlanner() {
    displayDate();
    changeContainer();
      // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });


  $(".saveBtn").on("click", function(){
    addToCalendar();
  });
});


