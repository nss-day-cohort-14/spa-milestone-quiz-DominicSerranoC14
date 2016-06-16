// The second IIFE should augment the original one with
// a function that creates all of the eventHandlers
// that you need for the application. Name the function
// activateEvents.

var CarLot = (function(carlotCars) {

  //create a reference to the cards of the cars
  var cars = document.getElementsByClassName('cards');

  //a reference to the user input text box
  var userInput = document.getElementById('user-input');


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


  carlotCars.expandBox = function() {

    //creates a text area element
    var userTextArea = document.createElement('textarea');
    //defines width and hight of textarea and centers it
    userTextArea.setAttribute("rows", 5);
    userTextArea.setAttribute("cols", 60);
    userTextArea.classList.add('centerTextarea');

    //when the user types more than a certain number of character
    //text input is replaced with a textarea
    userInput.addEventListener('keyup', function() {
      if ( userInput.value.length > 40 ) {

        var userInputText = userInput.value;

        userTextArea.innerText = userInputText;

        userInput.parentNode.replaceChild(userTextArea, userInput);

        userTextArea.setAttribute('autofocus', 'true');

        //pass userTextArea.value to card edit if character
        //limit is reached

      };
    })//end event listener for keyup on character limit
  }//end carlotCars.expandBox


  carlotCars.changeDescription = function() {

    for ( var i = 0; i < cars.length; i++) {
      cars[i].addEventListener('click', function() {

      var description = event.currentTarget;
      console.log("currentTarget",description);

      var descriptionID = description.id.split('--')[1];
      console.log(descriptionID);

      var inputChange = document.getElementById(`description--${descriptionID}`);

      console.log(inputChange);

      });
    };


  }//end carlotCars.changeDescription function



  return carlotCars;


})( CarLot );
