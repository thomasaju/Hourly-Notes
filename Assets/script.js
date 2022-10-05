


// to display time in paragraph id= currentDay(on top).
//ht function which is from https://momentjs.com/

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a')); 



function timeColor(){
    // var currentTime = moment().format();
        //  console.log(currentTime); this shows the current time but that is not useful for this project.

    var currentHour = moment().hour(); // this gives the hour. reference: https://www.geeksforgeeks.org/moment-js-moment-hour-method/#:~:text=The%20moment().,or%20to%20set%20the%20hours.&text=or-,moment,hours()%3B
    console.log(currentHour); //16


    $(".row").each(function(){ //executing a function for each matched element.
    var parsedId = parseInt($(this).attr("id")); //function parses a string argument and returns an integer.
    //this refers to the element. reference: https://api.jquery.com/each/
    console.log(parsedId);


        //if statement to check the condition and make class according currenthour.
        if(parsedId > currentHour){
            $(this).addClass("future")
        } if (parsedId === currentHour){
            $(this).addClass("present")
        } else {
            $(this).addClass("past")
        }
    })

}
$(".saveButton").on ("click",function(){
   
console.log(this);
//sibling() . This brother method returns all elements of same parent.
//in this taking the value of savebutton's sibling div text area.
var notes = $(this).siblings(".text").val();

var hour = $(this).parent().attr("id");


localStorage.setItem(hour, notes);

})

  
timeColor();
var timeHours = [9,10,11,12,13]
//to get the item from local storage
// $("#9 .text").val(localStorage.getItem("9"));

console.log(localStorage);





