
var saveButton = $(".saveButton");



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


        //if statement to check the condition and to make class.
        if(parsedId > currentHour){
            $(this).addClass("future")
        } if (parsedId === currentHour){
            $(this).addClass("present")
        } else {
            $(this).addClass("past")
        }
    })

}
saveButton.on("click", function(event){
    event.preventDefault();

    console.log(this);
    var hour = $(this).text(".time");
    var notes = $(this).text(".text");
    var hhour = JSON.stringify(hour);
    var nnotes = JSON.stringify(notes);

localStorage.setItem(hhour,nnotes);

})





   
timeColor();










