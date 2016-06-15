// The second IIFE should augment the original one with
// a function that creates all of the eventHandlers
// that you need for the application. Name the function
// activateEvents.

var CarLot = (function(carlotCars) {

  //create a reference to the cards of the cars
  var cars = document.getElementsByClassName('cards');


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
  }//end carlotCars.getCarFromDom function

  return carlotCars;


})( CarLot );
