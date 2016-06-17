// The final IIFE should augment the object with two
// more functions. One function resets the border
// thickness and background color for each car element
// back to the original values. The other function
// changes the thickness of the border of a car element,
// and changes its background color. The function must
// accept two arguments.
// 1.A car DOM element that was clicked on.
// 2.A color name.


var CarLot = (function(carBorder) {

//function that sets background and border width when you click
//on a car card
carBorder.highlightCard = function(car, color) {
  carBorder.resetStyle();
  car.classList.add('highlight-card');
  car.setAttribute('style', `background: ${color}`);
  //set border color with function call
  carBorder.setBorder();
},// end of highlightCard method

carBorder.resetStyle = function() {
  currentCars = carBorder.getCarsFromDom();
  for (var i = 0; i < currentCars.length; i++) {
    currentCars[i].classList.remove('highlight-card');
    currentCars[i].removeAttribute('style');
  }//end for loop
}// end carBorder.resetStyle function

return carBorder;

})( CarLot );//end of IIFE
