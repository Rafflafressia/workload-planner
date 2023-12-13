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
  function addToCalendar(){
    var description = $("#description");
   
  }



  // 3.) Change class of divs comparing them to the current hour. 
  function changeContainer(){

    var hour = parseInt(dayjs().format("H"));

    $(".time-block").each(function(){

     var hourEl = parseInt($(this).attr("data-hour"));

     $(this).removeClass("future");
     $(this).removeClass("present");
     $(this).removeClass("past");

     if(hourEl < hour){
      $(this).addClass("past");
     } 

     else if(hourEl === hour){
      $(this).addClass("present"); 
     } 
     
     else {
      $(this).addClass("future");
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

  $(".saveBtn").each(function(){

    console.log("hello");

    $(this).on("click", function(){
      console.log("I was pressed")
      var timeStamp = $(this).attr("data-hour");
      var description = $(".description").val;
      localStorage.setItem(timeStamp, description);
      console.log(description.textContent);
    })
  })
});


