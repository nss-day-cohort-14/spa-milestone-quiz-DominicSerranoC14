// The second IIFE should augment the original one with
// a function that creates all of the eventHandlers
// that you need for the application. Name the function
// activateEvents.

var CarLot = (function(carlotCars) {

  //create a reference to the cards of the cars
  var cars = document.getElementsByClassName('cards');

  //a reference to the user input text box
  var userInput = document.getElementById('user-input');


  var inputChange = "";

  //create a function to add all event listeners to elements
  carlotCars.activateEvents = function() {

    //this loop adds event listeners to each card
    for ( let i = 0; i < cars.length; i++) {
      cars[i].addEventListener('click', function() {
        let color = "lightgray";
        carlotCars.highlightCard(cars[i], color);
        });
      };
  },//end carlotCars.activateEvents method

  carlotCars.getCarsFromDom = function() {
    return cars;
  },//end carlotCars.getCarFromDom function


  carlotCars.userInputListener = function() {

    userInput.addEventListener('click', carlotCars.expandBox);

  },//end carlotCars.userInputListener function


  //create a function to grab description tag from a selected element
  carlotCars.selectDescription = function() {

      for ( var i = 0; i < cars.length; i++) {

        cars[i].addEventListener('click', function() {
        //resets input text to an empty string once a new div is selected
        userInput.value ="";
        //grabs selected div and parses the unique id number
        var description = event.currentTarget;
        var descriptionID = description.id.split('--')[1];
        //selects the description element with corresponding id number
        inputChange = document.getElementById(`description--${descriptionID}`);

      });//end for event listeners
    };//end for loop

  },//end carlotCars.selectDescription function


  //create function to sync input to description target
  carlotCars.changeDescription = function() {

    console.log(inputChange);

    userInput.addEventListener("keyup", function() {
      inputChange.innerHTML = userInput.value;
    })

  }//end carlotCars.changeDescription fucntion


  return carlotCars;


})( CarLot );
