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

    $(".saveBtn").on("click",function(){

     //Set data that we want to store
      
     var userContent =  $(this).siblings(".description").val();

     var timeStamp = $(this).closest(".time-block").attr("id");

     localStorage.setItem(timeStamp, userContent);

    });
  }

  //Change class of divs comparing them to the current hour. 

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

  //Plans persist after refreshing browser
  function showPlans(){

    $(".time-block").each(function(){
      var key = $(this).attr("id");

       //access localStorage with getItem
      var value = localStorage.getItem(key);

      //and append to description container
      $(this).children(".description").val(value);

    })
  }

  function runPlanner(){
    displayDate();
    changeContainer();
    showPlans();
    addToCalendar();
    showPlans();
  };

  runPlanner();
});


